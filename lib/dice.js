'use strict';


function Dice() {
}

Dice.prototype.roll = function(){
  var num = Math.floor(Math.random()*6);
  return num
};
