"use strict";

(function(){

  angular
  .module("blitter", [
    "ui.router",
    "bleets"
  ])
  .config(["$stateProvider", RoutesFunction]);

  function RoutesFunction($stateProvider){
    $stateProvider
    .state("bleetIndex", {
      url: "/bleets",
      templateUrl: "js/bleets/index.html",
      controller: "BleetIndexController",
      controllerAs: "BleetIndexViewModel"
    })
    .state("bleetShow", {
      url: "/bleets/:id",
      templateUrl: "js/bleets/show.html",
      controller: "BleetShowController",
      controllerAs: "BleetShowViewModel"
    });

  }// end of routes function





}()); // end of iffee function
