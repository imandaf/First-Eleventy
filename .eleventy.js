const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {
  // Pass-through copy for images and assets
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy("dist/assets/styles.css");

  const currentYear = new Date().getFullYear();
  eleventyConfig.addGlobalData("currentYear", currentYear);


  // Filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // Collections
  eleventyConfig.addCollection("projects", collection => {
    return collection.getFilteredByGlob("./src/projects/*.md").sort((a, b) => {
      return b.data.order - a.data.order;
    });
  });

  // Enable deep data merge
  eleventyConfig.setDataDeepMerge(true);

  // Return config object
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "docs"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
    passthroughFileCopy: true
  };
};