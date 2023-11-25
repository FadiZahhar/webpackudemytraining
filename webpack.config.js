const path = require("path");

module.exports = {
    entry:{
        index: "./src/index.js",
        courses: "./src/pages/coursess.js",
    },
    output:  {
        filename: "[name].bundle.js",
        path: path.resolve(_dirname,"dist"),
        clean: true,
    },
};