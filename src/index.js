'use strict';

/**
* Package
**/

var domready = require('domready');
var TweenMax = require('TweenMax');

var Component = require('./svg/component');

/**
 * Private
 **/


domready(function () {

    TweenMax.ticker.fps(60);

    var viewport = getViewPort();

     var c = new Component(require('./assets/svg/animation'), '100%', '100%');
     c.timeline().repeat(-1);
     c.play();

    window.addEventListener('resize', function(event){

        viewport = getViewPort();
        c.resize(viewport.width, viewport.height);

    });

    function getViewPort() {
        var h = window.innerHeight
            || document.documentElement.clientHeight
            || document.getElementsByTagName('body')[0].clientHeight;
        var w = window.innerWidth
            || document.documentElement.clientWidth
            || document.getElementsByTagName('body')[0].clientWidth;

        return {width : w, height : h};
    }
});