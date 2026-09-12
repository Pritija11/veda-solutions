# CI/CD: auto-deploy veda-solutions to EC2 on every push to main

This wires up `https://github.com/Pritija11/veda-solutions` so that whenever
a developer pushes (or merges a PR) to `main`, GitHub Actions automatically
SSHes into the `veda-solutions` EC2 instance, pulls the new code, rebuilds
the Next.js app, and restarts it. No manual deploy step after setup.

Target instance: `i-0758efc245894ce2a` (public IP `100.57.99.216`, key pair
`veda-solutions-key`) — this is the dedicated instance for this project,
separate from any other lab/test instances.

## What's in this bundle

- `.github/workflows/deploy.yml` — the GitHub Actions pipeline
- `deploy/ecosystem.config.js` — PM2 process config for the app
- `deploy/nginx-veda-solutions.conf` — Nginx reverse proxy (port 80 → 3000)
- `deploy/setup-ec2.sh` — one-time provisioning script for the EC2 box

## One-time setup (do this once)

### 1. Copy these files into the repo

Done — already committed and pushed to `main`.

### 2. Confirm the EC2 security group allows the right traffic

In the AWS console, open the security group attached to `i-0758efc245894ce2a`
and make sure inbound rules allow:

| Type  | Port | Source                                     | Why |
|-------|------|---------------------------------------------|-----|
| SSH   | 22   | 0.0.0.0/0 (or tighter, if you can pin it)   | GitHub-hosted runners have no fixed IP, so this generally has to stay open unless you use a self-hosted runner |
| HTTP  | 80   | 0.0.0.0/0                                   | so visitors can reach the site via Nginx |

### 3. Provision the instance (installs Node, PM2, Nginx, clones the repo)

SSH in using your `veda-solutions-key.pem` key pair and run the setup script once:

```bash
scp -i veda-solutions-key.pem deploy/setup-ec2.sh ec2-user@100.57.99.216:~/
ssh -i veda-solutions-key.pem ec2-user@100.57.99.216
chmod +x setup-ec2.sh
./setup-ec2.sh
```

When it finishes, `http://100.57.99.216` should already be serving the app.

### 4. Add GitHub repo secrets

In the repo: **Settings → Secrets and variables → Actions → New repository
secret**. Add these three:

| Secret name     | Value |
|------------------|-------|
| `EC2_HOST`       | `100.57.99.216` |
| `EC2_USER`       | `ec2-user` |
| `EC2_SSH_KEY`    | the full contents of `veda-solutions-key.pem` (paste the whole file, including the `-----BEGIN...` / `-----END...` lines) |

**Security note:** this gives GitHub Actions the same SSH key you use for
admin access. If you want tighter scoping later, generate a dedicated
deploy-only key pair (`ssh-keygen -t ed25519 -f deploy_key -N ""`), append
`deploy_key.pub` to `~/.ssh/authorized_keys` on the instance, and use
`deploy_key` as `EC2_SSH_KEY` instead — everything else stays the same.

### 5. Test it

Push any small change to `main` (or click **Run workflow** on the
"Deploy to EC2 (veda-solutions)" action in the Actions tab) and watch it go
green. Refresh `http://100.57.99.216` to see it live.

## Day-to-day after this

Developers just merge to `main` as normal — no manual SSH, no manual
build, no manual restart. If a deploy ever needs debugging:

```bash
ssh -i veda-solutions-key.pem ec2-user@100.57.99.216
pm2 status
pm2 logs veda-solutions
sudo systemctl status nginx
```

## Notes / things worth doing next

- **HTTPS**: right now the site is plain HTTP. Once you point a domain at
  `100.57.99.216`, run `sudo dnf install -y certbot python3-certbot-nginx`
  and `sudo certbot --nginx` to get free auto-renewing SSL.
- **PR previews / staging**: this pipeline only deploys `main`. If you want
  a staging environment for PRs, that's a separate workflow + a second EC2
  instance or a preview host — say the word if you want that added.
- **Rollback**: `pm2` keeps the app running the last successfully built
  version until the next deploy succeeds, but there's no automatic rollback
  on a failed build. Worth adding health-check + rollback logic later if
  this becomes business-critical.
