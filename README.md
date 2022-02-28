# js-archetype-project

Project init
-----

npm init -y


TypeScript project init
-----

npm run tsc -- --init //first -- means, pass args to tsc script

After the project initialization, we can transpile ts files into js files, by executing the command: npm run tsc

cross-env library
-----

The cross-env library can be used to set env at script start up.

"start": "cross-env PORT=4000 node index.js"

