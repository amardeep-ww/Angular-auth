(function(angular, undefined) {
'use strict';

angular.module('angularDemoApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);