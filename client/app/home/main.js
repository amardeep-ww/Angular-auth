'use strict';

angular.module('angularDemoApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        template: '<home></home>'
      });
  });
