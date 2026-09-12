#!/usr/bin/env bash
# One-time provisioning for i-0758efc245894ce2a (veda-solutions), Amazon Linux 2023.
#
# Run this ONCE, logged in over SSH as ec2-user:
#   ssh -i veda-solutions-key.pem ec2-user@100.57.99.216
#   curl -fsSL https://raw.githubusercontent.com/Pritija11/veda-solutions/main/deploy/setup-ec2.sh -o setup-ec2.sh
#   chmod +x setup-ec2.sh
#   ./setup-ec2.sh
#
# (Or just scp this file up and run it, if you haven't pushed it to the repo yet.)
#
# It installs Node.js, PM2, Nginx, clones the repo, builds it, and starts it
# under PM2 so it survives reboots. After this runs successfully, the
# GitHub Actions workflow (.github/workflows/deploy.yml) takes over for every
# future push to main.

set -euo pipefail

REPO_URL="https://github.com/Pritija11/veda-solutions.git"
APP_DIR="$HOME/veda-solutions"
NODE_MAJOR="20"

echo "==> Updating system packages"
sudo dnf update -y

echo "==> Installing git"
sudo dnf install -y git

echo "==> Installing Node.js ${NODE_MAJOR}.x (via NodeSource)"
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL "https://rpm.nodesource.com/setup_${NODE_MAJOR}.x" | sudo bash -
  sudo dnf install -y nodejs
else
  echo "    node already installed: $(node -v)"
fi

echo "==> Installing PM2 (process manager)"
if ! command -v pm2 >/dev/null 2>&1; then
  sudo npm install -g pm2
else
  echo "    pm2 already installed: $(pm2 -v)"
fi

echo "==> Installing Nginx"
sudo dnf install -y nginx

echo "==> Cloning the repo (first time only)"
if [ -d "$APP_DIR/.git" ]; then
  echo "    $APP_DIR already exists, skipping clone"
else
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

echo "==> Installing dependencies"
npm ci

echo "==> Building the app"
npm run build

echo "==> Installing Nginx site config"
sudo cp "$APP_DIR/deploy/nginx-veda-solutions.conf" /etc/nginx/conf.d/veda-solutions.conf
# Amazon Linux's default nginx.conf already has a catch-all server block on
# port 80 that will conflict with ours — disable it if present.
if grep -q "listen       80;" /etc/nginx/nginx.conf 2>/dev/null; then
  echo "    NOTE: /etc/nginx/nginx.conf has its own port 80 server block."
  echo "    Comment that block out manually, then: sudo systemctl reload nginx"
fi
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "==> Starting the app under PM2"
pm2 startOrReload deploy/ecosystem.config.js --update-env
pm2 save

echo "==> Enabling PM2 to survive reboots"
# pm2 startup prints a command that must be run with sudo; run it automatically:
STARTUP_CMD="$(pm2 startup systemd -u "$USER" --hp "$HOME" | tail -n 1)"
if [[ "$STARTUP_CMD" == sudo* ]]; then
  eval "$STARTUP_CMD"
fi
pm2 save

echo ""
echo "=================================================================="
echo " Done. The app should now be live at: http://$(curl -s ifconfig.me)"
echo " (or the instance's Elastic IP: 100.57.99.216)"
echo ""
echo " Check status any time with:"
echo "   pm2 status"
echo "   pm2 logs veda-solutions"
echo "   sudo systemctl status nginx"
echo "=================================================================="
