#!/usr/bin/env bash
cd ./app/web
npm install
ng build --aot -prod
cd ../..