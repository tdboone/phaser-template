'use strict';

var Phaser        = require('phaser');
var MainMenuState = require('./menus/main-menu-state');

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-template', new MainMenuState());
