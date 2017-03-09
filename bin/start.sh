npm install forever -g
forever start app.js --spinSleepTime 1000
cd ./app/web
yarn install
./node_modules/@angular/cli/bin/ng build