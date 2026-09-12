// PM2 process definition for the Next.js app.
// Used both by the first-time setup script and by every automated deploy.
module.exports = {
  apps: [
    {
      name: "veda-solutions",
      cwd: __dirname + "/..", // repo root (one level up from /deploy)
      script: "node_modules/.bin/next",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      max_memory_restart: "500M",
    },
  ],
};
