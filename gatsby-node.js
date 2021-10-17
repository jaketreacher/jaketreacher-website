const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage !== "develop") {
    return;
  }

  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
    ],
  });
};
