'use strict';

var Phaser = require('phaser');

var DrawImageState = require('../examples/draw-image-state');
var CarDrivingState = require('../examples/car-driving-state');

var MainMenuState = function()
{
    Phaser.State.apply(this, arguments);
}

MainMenuState.prototype = Object.create(Phaser.State.prototype);

MainMenuState.prototype.preload = function()
{
    this.load.image('button-image-example', 'assets/img/draw-image-example-button.png');
    this.load.image('button-driving-example', 'assets/img/car-driving-example-button.png');
}

MainMenuState.prototype.create = function()
{
    this.add.button(10, 10, 'button-image-example', this.onImageExampleClick);

    this.add.button(120, 10, 'button-driving-example', this.onDrivingExampleClick);
}

MainMenuState.prototype.onImageExampleClick = function()
{
    this.game.state.add('state-image-example', new DrawImageState(), true);
}

MainMenuState.prototype.onDrivingExampleClick = function()
{
    this.game.state.add('car-driving-example', new CarDrivingState(), true);
}

module.exports = MainMenuState;
