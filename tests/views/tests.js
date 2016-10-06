
var phantomcss = require('phantomcss');

// Config
// @TODO Move this to config file.
const DOMAIN = 'http://localhost/sandbox/theme-starter/';

phantomcss.init({
	
});

// Testing all homepage elements.
casper.test.begin('Homepage', function(test) {
	phantomcss.init({
		rebase: casper.cli.get('rebase')
	});

	// where will we test. Fill in the '' to test different pages
	casper.start(DOMAIN + '');

	// On what size shaw we make the tests.
	casper.viewport(1366, 768); // 35%	world-wide usage

	// begin testing:
	// ----------------------------------------------------
	casper.then(function() {
		// Screenshot the whole body element
		phantomcss.screenshot('body', 'screenshot-body');
	});

	// end testing and compare results
	// ----------------------------------------------------
	casper.then(function now_check_the_screenshots() {
		phantomcss.compareAll();
	});

	casper.run(function() {
		console.log('\nTest results:');
		casper.test.done();
	});
});
