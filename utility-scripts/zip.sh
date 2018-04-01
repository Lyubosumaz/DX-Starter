#!/bin/bash

zip_name=$1

if [[ -n "$zip_name" ]]; then
    echo "Zipping your theme without node_modules ..."
    zip -r "$zip_name" ./ -x node_modules/\*  sass-cache/**\* utility-scripts/\* assets/src/\* tests/\* *.git* ./README.md ./npm-debug.log ./changelog.txt ./gulpfile.js ./package.json "*.DS_Store" "*.editorconfig" "*.gitignore" "tests/*" ".eslintrc.json" ".editorconfig" ".sass-lint.yml"

    echo "Zip successfull."
else
    echo "ERROR: ZIP file name not provided..."
fi
