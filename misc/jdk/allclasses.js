const fs = require("fs")
const https = require("https")
const parser = require("node-html-parser")
const path = require("path")
const subprocess = require("child_process")

https.get("https://docs.oracle.com/en/java/javase/11/docs/api/allclasses.html", res => {
  let html = []
  res.on("data", chunk => html.push(chunk))
  res.on("end", () => {
    let doc = parser.parse(Buffer.concat(html).toString())
    let classes = doc.querySelectorAll("main li a").map((it, i) => {
      let href = it.getAttribute("href")
      return href.replace(/\.html$/, "").split("/").slice(1).join(".")
    })
    classes.sort()
    for (let i = 0; i < classes.length; i += 500) {
      let proc = subprocess.spawnSync("javap", classes.slice(i, i + 500))
      if (proc.status) console.error(proc.stderr.toString())
    }
    fs.writeFileSync(
      path.join(__dirname, "allclasses.json"),
      JSON.stringify(classes, null, 2)
    )
  })
})
