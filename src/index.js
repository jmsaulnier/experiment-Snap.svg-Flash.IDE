'use strict';

var domready = require('domready');
var TweenMax = require('TweenMax');

var Component = require('./svg/component');

domready(function () {

    TweenMax.ticker.fps(60);

     var c = new Component(require('./assets/svg/animation'), 550, 400);
     c.timeline().repeat(-1);
     c.play();
});