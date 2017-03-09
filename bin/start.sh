#!/usr/bin/env bash

npm install forever @angular/cli -g
cd ./app/web
npm install
ng build
cd ../..