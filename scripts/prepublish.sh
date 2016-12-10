echo "> Start transpiling ES2015"
echo ""
./node_modules/.bin/babel --plugins "transform-runtime" src --ignore __tests__  --out-dir ./dist/common
echo ""
echo "> Complete transpiling ES2015"
echo ""
echo "> Start building UMD"
browserify index.js --standalone StdReactiveVar -o dist/umd/reactive-var-std.js
uglifyjs dist/umd/reactive-var-std.js -o dist/umd/reactive-var-std.min.js
echo "> Complete building UMD"
