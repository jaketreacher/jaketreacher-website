module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/css/**/*.css",
  });
  return {
    dir: {
      input: "src",
    },
  };
};
