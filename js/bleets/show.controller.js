
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
    this.bleet = BleetFactory.get({id: $stateParams.id});

    this.update = function () {
      this.bleet.$update({id: $stateParams.id})
    };
    this.destroy = function(){
      this.bleet.$delete({id: $stateParams.id});
    }
  }



}());
