module.exports = {
  apps: [
    {
      name: "frontend",
      cwd: "/root/gaffisAccounts2/frontend",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
