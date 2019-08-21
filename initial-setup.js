// The two packages required to write in the theme-version.php file
var replace = require('replace');


// Feel free to replace these with the name of the project that will be used. Keep it consistent within the name and follow the template

// Lower case name. Example: projectname
var lowercase = "projectname";

// Lower case with a hyphen of the project. Example: project-name
var lowercaseHyphen = "project-name";

// Uppercase with a space between. Example: "Project Name"
var uppercase = "Project Name";

// Uppercase with an underscore. Example: "Project_Name"
var uppercaseUnderscore = "Project_Name"


// Replacements
// TODO: Improve the excludes
replace({
    regex: "dxstarter",
    replacement: lowercase,
    paths: ['.'],
    recursive: true,
    silent: true,
    exclude: 'initial-setup.js'
});

replace({
    regex: "dx-starter",
    replacement: lowercaseHyphen,
    paths: ['.'],
    recursive: true,
    silent: true,
    exclude: 'initial-setup.js'
});

replace({
    regex: "DX Starter",
    replacement: uppercase,
    paths: ['.'],
    recursive: true,
    silent: true,
    exclude: 'initial-setup.js'
});

replace({
    regex: "DX_Starter",
    replacement: uppercaseUnderscore,
    paths: ['.'],
    recursive: true,
    silent: true,
    exclude: 'initial-setup.js'
});
