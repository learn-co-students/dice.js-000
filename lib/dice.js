'use strict';


function Dice() {
}

Dice.prototype.roll = function(){

   var roll = Math.floor((Math.random() * 6) + 1)
  return roll
};
