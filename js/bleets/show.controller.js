
"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetShowController", [
    "BleetFactory",
    "$stateParams",
    BleetShowControllerFunction
  ]);

  function BleetShowControllerFunction(BleetFactory, $stateParams){
    console.log("here!");
    this.bleet = BleetFactory.get({id: $stateParams.id});
  }


}());
