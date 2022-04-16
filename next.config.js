module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/blog": { page: "/blog" },
      "/blog/": { page: "/blog/" },
    };
  },
};
