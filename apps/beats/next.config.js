const withTM = require("next-transpile-modules")(["@user/feature-login"]);

module.exports = withTM({
  reactStrictMode: true,
});
