define([
    'angular',
    'example/example-module',
    'example/example-controller'
], function(angular) {

    angular.bootstrap(document.getElementById('example-app'), ['example'], {
        strictDi: true
    });

});