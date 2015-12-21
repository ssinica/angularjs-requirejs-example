define([
    'angular',
    'common/common-module'
], function(angular) {

    angular.module('common')
    .factory('commonService', ['$log', function($log) {
        return {
            say: function(phrase) {
                $log.debug(phrase);
            }
        }
    }]);

});