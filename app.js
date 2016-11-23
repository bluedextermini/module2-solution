(function() {
  'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffServiceProvider);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var list=this;
    list.items=ShoppingListCheckOffService.getToBuyItems();
    list.boughtItem=function functionName(index) {
        ShoppingListCheckOffService.boughtItem(index);
    }
}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list=this;
    list.items=ShoppingListCheckOffService.getBoughtListItems();

}

function ShoppingListCheckOffServiceProvider() {
  var service=this;
  //initializing to buy list with 5 items by default.
  service.toBuy=[{name:"Milk",quantity:"1 bag"},
                 {name:"Chips",quantity:"12 bag"},
                 {name:"Chocolate",quantity:"3 bag"},
                 {name:"Beer",quantity:"11 bottle"},
                 {name:"Coconut",quantity:"1 piece"},];
  //initializing bought emtpy list
  service.bought=[];

  //returning to buy list items
  service.getToBuyItems=function(){
    return service.toBuy;
  }

  service.boughtItem=function(index){
    //removing from to Buy list and adding that item to bought list
    service.bought.push(service.toBuy.splice(index,1)[0]);
  }

  //returning bought list
  service.getBoughtListItems=function(){
    return service.bought;
  }

  return service;
}

}());
