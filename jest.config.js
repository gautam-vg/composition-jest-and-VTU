module.exports = {
	testEnvironment: 'jsdom',
	"moduleFileExtensions": [
		"js",
		"json",
		// tell Jest to handle `*.vue` files
		"vue"
	],
	// support the same @ -> src alias mapping in source code
	"moduleNameMapper": {
		"^@/(.*)$": "<rootDir>/src/$1"
	},
	"transform": {
		// process `*.js` files with `babel-jest`
		".*\\.(js)$": "babel-jest",
		// process `*.vue` files with `vue-jest`
		".*\\.(vue)$": "@vue/vue2-jest",
	}
}