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
    // Angular is not distributed as AMD module, so we need to wrap it with define().
    // See http://requirejs.org/docs/api.html#config-shim for more details.
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});