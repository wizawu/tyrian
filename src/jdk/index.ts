import * as htmlParser from "node-html-parser"
import fs from "fs"
import https from "https"
import path from "path"

import { javap } from "../utils"
import * as parser from "../parser"

https.get("https://docs.oracle.com/en/java/javase/11/docs/api/allclasses.html", res => {
  let html: any[] = []
  res.on("data", chunk => html.push(chunk))
  res.on("end", () => {
    let doc = htmlParser.parse(Buffer.concat(html).toString())
    let classes = doc.querySelectorAll("main li a").map(it => {
      let href = it.getAttribute("href") as string
      return href
        .replace(/\.html$/, "")
        .split("/")
        .slice(1)
        .join(".")
    })
    classes.sort()
    for (let i = 0; i < classes.length; i += 500) {
      javap([], classes.slice(i, i + 500))
    }
    fs.writeFileSync(path.join("src", "jdk", "classes.json"), JSON.stringify(classes, null, 2))

    let interfaces = {}
    parser.parse([], interfaces, classes, path.join("@types", "jdk"))
    fs.writeFileSync(path.join("src", "jdk", "interfaces.json"), JSON.stringify(interfaces, null, 2))
  })
})
