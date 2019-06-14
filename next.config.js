module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/ch": { page: "/", query: { lang: "zh" } }
    };
  }
};
