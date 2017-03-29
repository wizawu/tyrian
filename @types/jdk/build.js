var fs = require("fs")
var path = require("path")
var parseJAR = require("../../src/compiler/parseJAR")

var jars = process.argv[2] ? [process.argv[2]] : [
    process.env.JAVA_HOME + "/jre/lib/charsets.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/cldrdata.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/dnsns.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/icedtea-sound.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/jaccess.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/java-atk-wrapper.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/localedata.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/nashorn.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/sunec.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/sunjce_provider.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/sunpkcs11.jar",
    process.env.JAVA_HOME + "/jre/lib/ext/zipfs.jar",
    process.env.JAVA_HOME + "/jre/lib/jce.jar",
    process.env.JAVA_HOME + "/jre/lib/jsse.jar",
    process.env.JAVA_HOME + "/jre/lib/management-agent.jar",
    process.env.JAVA_HOME + "/jre/lib/resources.jar",
    process.env.JAVA_HOME + "/jre/lib/rt.jar",
    process.env.JAVA_HOME + "/jre/lib/security/local_policy.jar",
    process.env.JAVA_HOME + "/jre/lib/security/US_export_policy.jar",
    process.env.JAVA_HOME + "/lib/dt.jar",
    process.env.JAVA_HOME + "/lib/jconsole.jar",
    process.env.JAVA_HOME + "/lib/sa-jdi.jar",
    process.env.JAVA_HOME + "/lib/tools.jar",
]

jars.forEach(function(jar, i) {
    if (!fs.existsSync(jars[i])) {
        console.error(jars[i] + " not found")
        process.exit(1)
    }
})

jars.forEach(function(jar) {
    fs.writeFileSync(path.basename(jar).replace(".jar", ".d.ts"), parseJAR(jar))
})
