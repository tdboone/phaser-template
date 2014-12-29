'use strict';

var Phaser = require('phaser');

var game = new Phaser.Game(800, 600, Phaser.AUTO, undefined, { preload : preload, create : create});

function preload()
{
    game.load.image('car', 'img/crappy-car-1.png');
}

function create()
{
    game.add.sprite(0, 0, 'car');
}
