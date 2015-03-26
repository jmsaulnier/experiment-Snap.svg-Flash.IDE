'use strict';

var Snap = require('../vendor/snap.svg');
var ResourceManager = require('./resourceManager');
var MovieClip = require('./stage');

var Component = function (data, w, h) {

	var instance = this,
		timeline;

	instance.resourceManager = new ResourceManager(data);

	instance.s = new Snap('#animation');
	create(instance.s);

	timeline = instance.movieclip.getTimeline();

	this.play = function () {
		timeline.play();
	}

	this.timeline = function () {
		return timeline;
	}

	function create(s) {
		var maintimelineIndex,
			mainTimeline;

		if(instance.rootAnimator !== undefined)
		{
			instance.rootAnimator.dispose();
			instance.rootAnimator = null;
		}

		maintimelineIndex = instance.resourceManager.m_data.DOMDocument.Timeline.length - 1;
		mainTimeline = instance.resourceManager.m_data.DOMDocument.Timeline[maintimelineIndex];

		instance.movieclip = new MovieClip(instance.s, mainTimeline, instance.resourceManager);
	}

	function resize(width, height) {

	}
};

module.exports = Component;