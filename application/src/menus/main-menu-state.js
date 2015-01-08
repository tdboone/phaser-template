'use strict';

var Phaser = require('phaser');

var DrawImageState = require('../examples/draw-image-state');

var MainMenuState = function()
{
    Phaser.State.apply(this, arguments);
}

MainMenuState.prototype = Object.create(Phaser.State.prototype);

MainMenuState.prototype.preload = function()
{
    this.load.image('button-image-example', 'assets/img/draw-image-example-button.png');
}

MainMenuState.prototype.create = function()
{
    this.add.button(10, 10, 'button-image-example', this.onImageExampleClick);
}

MainMenuState.prototype.onImageExampleClick = function()
{
    this.game.state.add('state-image-example', new DrawImageState(), true);
}

module.exports = MainMenuState;
