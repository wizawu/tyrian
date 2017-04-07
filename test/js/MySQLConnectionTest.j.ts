// declare const require: any

var Mocha = require("mocha")

var mocha = new Mocha()

mocha.suite.beforeEach(function() {
    console.log("ready")
})

mocha.suite.addTest(new Mocha.Test("test add", function() {
}))

mocha.suite.addTest(new Mocha.Test("test minus", function() {
}))

mocha.run()
