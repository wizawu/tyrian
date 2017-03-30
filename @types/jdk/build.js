var fs = require("fs")
var path = require("path")
var parseJAR = require("../../src/compiler/parseJAR")

var jars = [
    "jre/lib/charsets.jar",
    "jre/lib/ext/cldrdata.jar",
    "jre/lib/ext/dnsns.jar",
    "jre/lib/ext/icedtea-sound.jar",
    "jre/lib/ext/jaccess.jar",
    "jre/lib/ext/java-atk-wrapper.jar",
    "jre/lib/ext/localedata.jar",
    "jre/lib/ext/nashorn.jar",
    "jre/lib/ext/sunec.jar",
    "jre/lib/ext/sunjce_provider.jar",
    "jre/lib/ext/sunpkcs11.jar",
    "jre/lib/ext/zipfs.jar",
    "jre/lib/jce.jar",
    "jre/lib/jsse.jar",
    "jre/lib/management-agent.jar",
    "jre/lib/resources.jar",
    "jre/lib/rt.jar",
    "jre/lib/security/local_policy.jar",
    "jre/lib/security/US_export_policy.jar",
    "lib/dt.jar",
    "lib/jconsole.jar",
    "lib/sa-jdi.jar",
    "lib/tools.jar",
]

jars.forEach(function(jar, i) {
    jars[i] = process.env.JAVA_HOME + "/" + jars[i]
    if (!fs.existsSync(jars[i])) {
        console.error(jars[i] + " not found")
        process.exit(1)
    }
})

jars.forEach(function(jar) {
    fs.writeFileSync(path.basename(jar).replace(".jar", ".d.ts"), parseJAR(jar))
})
