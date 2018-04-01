"use strict";

var questions = require("base-questions");
var assemble = require("assemble-core");
var store = require("base-store");
var replace = require("replace-in-file");
var argv = require("minimist")(process.argv.slice(2), {
	alias: { init: "i", force: "f" }
});

var app = assemble();
app.use(store());
app.use(questions(argv));

// All the questions we need to ask:
app.questions
	.set("project.name", "Name of the project? (default DevriX Starter)")
	.set(
		"project.package",
		"Name of the project package (default DevriX_Starter)?"
	)
	.set("project.local", "Name of the project slug? (default dxstarter)")
	.set("project.description", "Description of the project?")
	.set("project.prebuilds", "Add prebuilds? Y/n");

app.ask(function(err, answers) {
	if (err) return console.log(err);
	validateAnswers(answers);
});

function validateAnswers(answers) {
	console.log(answers);

	let options = {
		files: "./**/*",
		from: /DevriX Starter/g,
		to: answers.project.name,
		ignore: [
			"node_modules/**/*",
			"node_modules",
			"./node_modules/",
			"../node_modules"
		],
		dry: true
	};

	try {
		const changes = replace.sync(options);
		console.log("Modified files:", changes.join(", "));
	} catch (error) {
		console.error("Error occurred:", error);
	}

	options = {
		files: "./**/*",
		from: /DevriX_Starter/g,
		to: answers.project.package,
		ignore: [
			"node_modules/**/*",
			"node_modules",
			"./node_modules/",
			"../node_modules"
		],
		dry: true
	};

	try {
		const changes = replace.sync(options);
		console.log("Modified files:", changes.join(", "));
	} catch (error) {
		console.error("Error occurred:", error);
	}

	options = {
		files: "./**/*",
		from: /dxstarter/g,
		to: answers.project.local,
		ignore: [
			"node_modules/**/*",
			"node_modules",
			"./node_modules/",
			"../node_modules"
		],
		dry: true
	};

	try {
		const changes = replace.sync(options);
		console.log("Modified files:", changes.join(", "));
	} catch (error) {
		console.error("Error occurred:", error);
	}
}
