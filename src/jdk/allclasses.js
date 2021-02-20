const fs = require("fs")
const htmlParser = require("node-html-parser")
const https = require("https")
const path = require("path")

const javap = require("../../dist/parser/javap")
const parser = require("../../dist/parser/index")

https.get("https://docs.oracle.com/en/java/javase/11/docs/api/allclasses.html", res => {
  let html = []
  res.on("data", chunk => html.push(chunk))
  res.on("end", () => {
    let doc = htmlParser.parse(Buffer.concat(html).toString())
    let classes = doc.querySelectorAll("main li a").map(it => {
      let href = it.getAttribute("href")
      return href.replace(/\.html$/, "").split("/").slice(1).join(".")
    })
    classes.sort()
    for (let i = 0; i < classes.length; i += 500) {
      javap.disassemble([], classes.slice(i, i+ 500))
    }
    fs.writeFileSync(
      path.join(__dirname, "allclasses.json"),
      JSON.stringify(classes, null, 2)
    )

    let interfaceCount = {}
    parser.parse([], interfaceCount, classes)
    fs.writeFileSync(
      path.join(__dirname, "interfaces.json"),
      JSON.stringify(interfaceCount, null, 2)
    )
  })
})
