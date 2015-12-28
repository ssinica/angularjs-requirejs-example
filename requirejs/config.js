requirejs.config({
    baseUrl: 'js',
    paths: {

        // 3rd party
        angular: 'lib/angular',

        // vendor
        vendor: 'lib/vendor',

        // common app
        commonApp: 'common/common-app',

        // example app
        exampleApp: 'example/example-app'

    },
    // Use a bundle for 3rd party scripts.
    //
    // During optimization process we put all 3rd party scripts into one file - 'vendor.js'.
    // So now we do not have a file called angular.js anymore and we need a bundle to say
    // RequireJS in which file module 'angular' can be found.
    //
    // See http://requirejs.org/docs/api.html#config-bundles for more details.
    bundles: {
        'vendor': [
            'angular'
        ]
    },
    // In PROD you may want to append to each resource URL some build identificator,
    // which will be automatically incremented for each new build and which will force
    // browser to reload resource.
    urlArgs: 'v=1'
});