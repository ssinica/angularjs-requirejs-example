define([
    'angular',
    'example/example-module'
], function(angular) {

    angular.module('example')
    .controller('exampleController', ['$scope', 'commonService', function($scope, commonService) {

        $scope.greeting = commonService.sayHello("Sergey");

    }]);

});