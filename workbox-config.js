module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,html,json,png}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};