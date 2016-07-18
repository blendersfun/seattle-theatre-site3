#!/bin/bash
[[ -d node_modules ]] || npm install
if [[ $NODE_ENV == "production" ]]
then
    echo 'running in production mode' 
    node ./index.js
else 
    echo 'running in development mode' 
    ./node_modules/.bin/webpack-dev-server --hot --inline --host=0.0.0.0 --port 3000 --content-base public
fi
