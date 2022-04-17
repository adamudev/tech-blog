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

module.exports = {
  trailingSlash: true,
};

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};
