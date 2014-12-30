'use strict';

// https://github.com/photonstorm/phaser/issues/1186
var Phaser = require('phaser');

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-template', { preload : preload, create : create});

function preload()
{
    game.load.image('car', 'assets/img/crappy-car-1.png');
}

function create()
{
    game.add.sprite(0,0,'car');
}
