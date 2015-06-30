'use strict';


function Dice() {
}

Dice.prototype.roll = function(){
  return Math.floor((Math.random() * 7) + 1);
};