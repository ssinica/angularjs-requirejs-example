requirejs.config({
    baseUrl: 'js',
    paths: {

        // 3rd party
        angular: 'lib/angular',

        // vendor
        vendor: 'lib/vendor',

        // our apps
        commonApp: 'common/common-app',

        exampleApp: 'example/example-app'

    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});