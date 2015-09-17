'use strict';

/**
 * @ngdoc overview
 * @name freeCodeCampProjectApp
 * @description
 * # freeCodeCampProjectApp
 *
 * Main module of the application.
 */
var app= angular
  .module('freeCodeCampProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
