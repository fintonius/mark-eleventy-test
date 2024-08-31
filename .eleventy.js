module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('src/style.css');
    eleventyConfig.addPassthroughCopy('src/home-page-style.css');
    eleventyConfig.addPassthroughCopy('src/project-style.css');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/admin');
    eleventyConfig.addPassthroughCopy('src/script.js');
    
    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
}