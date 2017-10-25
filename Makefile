build:
	rm -rf dist
	mkdir dist
	./node_modules/.bin/browserify index.js --standalone WalletMessage -o dist/wallet-message.js
	./node_modules/.bin/browserify index.js --standalone WalletMessage | ./node_modules/.bin/uglifyjs > dist/wallet-message.min.js
publish:
	make build
	-git branch -D release
	git checkout -b release && git add -f dist/ && git commit -am "Update dist for release"
	git push -f origin release
	npm publish --access public
	git checkout -
	git branch -D release
	git push
	git push --tags