'use strict';

angular.module('angularDemoApp.auth', [
  'angularDemoApp.constants',
  'angularDemoApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
