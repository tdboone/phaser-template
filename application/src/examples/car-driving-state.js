'use strict';

var Phaser = require('phaser');

var CarDrivingState = function()
{
    Phaser.State.apply(this, arguments);
}

CarDrivingState.prototype = Object.create(Phaser.State.prototype);

CarDrivingState.prototype.preload = function()
{
    this.load.image('dirt', 'assets/img/dirt.png');
    this.load.image('car', 'assets/img/bluebox.png');
};

CarDrivingState.prototype.create = function()
{
    this.add.tileSprite(0, 0, 1920, 1920, 'dirt');
    this.game.world.setBounds(0, 0, 1920, 1920);

    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.car = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'car');

    this.game.physics.p2.enable(this.car);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.camera.follow(this.car);
}

CarDrivingState.prototype.update = function()
{
    this.car.body.setZeroRotation();

    var carRefVelocity = rotateVector(-this.car.body.rotation, [this.car.body.velocity.x, this.car.body.velocity.y]);

    // apply rolling friction
    this.car.body.applyForce(
        rotateVector(this.car.body.rotation, [0, carRefVelocity[1] * 0.1]),
        this.car.body.x,
        this.car.body.y
    );

    // apply skid friction
    this.car.body.applyForce(
        rotateVector(this.car.body.rotation, [carRefVelocity[0] * 0.05, 0]),
        this.car.body.x,
        this.car.body.y
    );


    if (this.cursors.up.isDown) {
        this.car.body.applyForce(
            rotateVector(this.car.body.rotation, [0, 120]),
            this.car.body.x,
            this.car.body.y
        );
    } else if (this.cursors.down.isDown) {
        this.car.body.applyForce(
            rotateVector(this.car.body.rotation, [0, -90]),
            this.car.body.x,
            this.car.body.y
        );
    }

    if (this.cursors.right.isDown) {
        this.car.body.rotateRight(80);
    } else if (this.cursors.left.isDown) {
        this.car.body.rotateLeft(80);
    }
}

var rotateVector = function(rotation, vector) {
    return [
        vector[0] * Math.cos(rotation) - vector[1] * Math.sin(rotation),
        vector[0] * Math.sin(rotation) + vector[1] * Math.cos(rotation)
    ];
}

module.exports = CarDrivingState;
