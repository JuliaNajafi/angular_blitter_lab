
"use strict";

(function(){
  angular
  .module( "bleets" )
  .controller("BleetIndexController", [
    "BleetFactory",
    "$state",
    BleetIndexControllerFunction
  ]);

  function BleetIndexControllerFunction(BleetFactory, $state){
    this.bleets = BleetFactory.query();

    this.bleet = new BleetFactory();
    this.create = function(){
      this.bleet.$save().then(function(response){
        $state.go("bleetShow", ({id: response.id}));
      })
    }
  }




}());
