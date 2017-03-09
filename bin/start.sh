#!/usr/bin/env bash

# npm install forever -g
cd ./app/web
npm install
./node_modules/@angular/cli/bin/ng build
cd ../..