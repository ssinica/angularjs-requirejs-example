{
    appDir: "../src/main/resources/static/js",
    baseUrl: "./",
    mainConfigFile: "../src/main/resources/static/js/config.js",
    dir: "../target/r/static/js",
    optimizeCss: "none",
    // for demonstration purposes we will not uglify JS. For real life you need to enable uglifying.
    //optimize: "uglify",
    optimize: "none",
    skipDirOptimize: false,
    removeCombined: true,
    modules: [
    {
        name: "vendor"
    },
    {
        name: "commonApp",
        exclude: ["vendor"]
    },
    {
        name: "exampleApp",
        exclude: ["vendor", "commonApp"]
    }
    ],
    throwWhen: {
        optimize: true
    },
    waitSeconds: 20
}