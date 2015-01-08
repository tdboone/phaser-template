'use strict';

var Phaser = require('phaser');

var DrawImageState = function()
{
    Phaser.State.apply(this, arguments);
}

DrawImageState.prototype = Object.create(Phaser.State.prototype);

DrawImageState.prototype.preload = function()
{
    this.load.image('car', 'assets/img/crappy-car-1.png');
}

DrawImageState.prototype.create = function()
{
    this.add.sprite(0,0,'car');
}

module.exports = DrawImageState;
