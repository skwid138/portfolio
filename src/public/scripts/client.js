/*jshint esversion: 6 */
"use strict";
console.log('client.js sourced');

// angular and sourced in modules
const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

myApp.config(function ($routeProvider) {

    // client side routing
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as hc'
    }).otherwise('/');

}); // end config