define([
    'angular',
    'common/common-module'
], function(angular) {

    angular.module('common')
    .factory('commonService', [function() {
        return {
            sayHello: function(name) {
                return "Hello, " + name + "!";
            }
        }
    }]);

});