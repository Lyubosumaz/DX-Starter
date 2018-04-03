"use strict";

const questions = require("base-questions");
const assemble = require("assemble-core");
const store = require("base-store");
const replace = require("replace-in-file");
const argv = require("minimist")(process.argv.slice(2), {
	alias: { init: "i", force: "f" }
});

let app = assemble();

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

	let options = [
		{
			files: "**/*",
			from: /DevriX Starter/g,
			to: answers.project.name,
			ignore: [
				'utility-scripts/configure.js',
				'node_modules/**/*',
			],
			dry: true
		},
		{
			files: "**/*",
			from: /DevriX_Starter/g,
			to: answers.project.package,
			ignore: [
				'utility-scripts/configure.js',
				'node_modules/**/*',
			],
			dry: true
		},
		{
			files: "**/*",
			from: /dxstarter/g,
			to: answers.project.local,
			ignore: [
				'utility-scripts/configure.js',
				'node_modules/**/*',
			],
			dry: true
		},
	];

	// Go through all options
	options.forEach(function(option) {
		try {
			const changes = replace.sync(option);
			console.log("Modified files:", changes.join(", "));
		} catch (error) {
			console.error("Error occurred:", error);
		}
	});
}
