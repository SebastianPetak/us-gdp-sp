var winston = require('winston');
global.Promise = require('bluebird');
var d3 = require('d3');
var d3Promise = require('d3.promise');

describe('Home', function() {
	'use strict';
	var usGdpResponse;

	beforeEach(function(done) {
		d3Promise.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
		.then(function(data) {
			usGdpResponse = data;
			done();
		}, function(error) {
			winston.log('error', error);
			done();
		});
	});

	it('has loaded data into it\'s testing environment', function (done) {
		expect(usGdpResponse).toBeDefined();
		done();
	});
});
