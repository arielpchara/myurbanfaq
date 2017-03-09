#!/usr/bin/env bash

# npm install forever -g
npm install @angular/cli -g
cd ./app/web
npm install
ng build
cd ../..