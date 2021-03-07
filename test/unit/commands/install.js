const assert = require("assert")
const redent = require("redent")
const { describe, it } = require("mocha")

const install = require("../../../dist/commands/install")

describe("commands/install", () => {
  it("listLibClasses", () => {
    return install.listLibClasses(["integration/lib/gson-2.7.jar"]).then(result => {
      assert.strictEqual(result.length, 86)
      assert.strictEqual("com.google.gson.annotations.Expose", result[0])
    })
  })

  it("gradleTemplate", () => {
    let result = install.gradleTemplate(["com.google.code.gson:gson:2.7"])
    assert.strictEqual(result, redent(`
      apply plugin: "java"

      repositories {
        jcenter()
        mavenCentral()
      }

      task install(type: Copy) {
        into "/home/wizawu/github/tyrian/test/lib"
        from configurations.runtime
      }

      dependencies {
        compile "com.google.code.gson:gson:2.7"
      }
    `, 0).trim() + "\n")
  })
})
