// Hack to prevent browserify error. See issue discussion here:
// https://github.com/photonstorm/phaser/issues/1186
module.exports = require.resolve('nw.gui');