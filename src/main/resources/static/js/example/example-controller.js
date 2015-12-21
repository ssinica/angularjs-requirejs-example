define([
    'angular',
    'example/example-module'
], function(angular) {

    angular.module('example')
    .controller('exampleController', ['commonService', function(commonService) {
        commonService.say("Hello world!");
    }]);

});