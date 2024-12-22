module.exports = {
    hooks: {
      readPackage(pkg) {
        pkg.scripts = pkg.scripts || {};
        if (!pkg.scripts.preinstall) {
          pkg.scripts.preinstall = 'npx only-allow pnpm';
        }
        return pkg;
      },
    },
  };
  