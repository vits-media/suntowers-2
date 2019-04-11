module.exports = {
  version: 2,
  builds: [{ src: "package.json", use: "@now/next" }],
  target: "serverless"
};
