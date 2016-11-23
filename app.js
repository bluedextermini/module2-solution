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

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list=this;
    list.items=ShoppingListCheckOffService.getBoughtListItems();

}

function ShoppingListCheckOffServiceProvider() {
  var service=this;
  service.toBuy=[{item:"Milk",quantity:"1 bag"},
                 {item:"Chips",quantity:"12 bag"},
                 {item:"Chocolate",quantity:"3 bag"},
                 {item:"Beer",quantity:"11 bottle"},
                 {item:"Coconut",quantity:"1 piece"},];
  service.bought=[];

  service.getToBuyItems=function(){
    return service.toBuy;
  }

  service.boughtItem=function(index){
    service.bought.push(service.toBuy.splic(index,1));
    //service.toBuy.remove(index);
    //service.toBuy.splice(itemIndex, 1);
  }

  service.getBoughtListItems=function(){
    return service.bought;
  }

  return service;
}


}());
