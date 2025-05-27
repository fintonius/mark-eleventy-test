const markdownIt = require ("markdown-it");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('src/style.css');
    eleventyConfig.addPassthroughCopy('src/home-page-style.css');
    eleventyConfig.addPassthroughCopy('src/project-style.css');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/admin');
    eleventyConfig.addPassthroughCopy('src/script.js');
    eleventyConfig.addPlugin(UpgradeHelper);
    
    // create a markdown filter to convert MD to HTML
    const md = markdownIt({
        html: true,
    });

    // adds the filter 'markdown' to eleventy/Nunjucks
    eleventyConfig.addNunjucksFilter("markdown", (content) => {
        return md.render(content);
    });

    // configures Eleventy to use md as the specific instance of markdown-it
    eleventyConfig.setLibrary("md", md);

    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
}