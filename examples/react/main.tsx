import React from "react"
import ReactDOMServer from "react-dom/server"
import View from "./view"

const Spark = spark.Spark

Spark.get("/:name", (req, res) => {
    let name = req.params(":name")
    return ReactDOMServer.renderToStaticMarkup(<View name={name} />)
})
