import fastify from "fastify"

import cache from "./cache"

const server = fastify({})

server.get("/", (req, res) => {
  res.send("Hello, Tyrian!\n")
})

server.put("/:key/:value", (req, res) => {
  cache.put(req.params["key"], req.params["value"])
  res.send("")
})

server.get("/:key", (req, res) => {
  const key = req.params["key"]
  res.send(cache.getIfPresent(key) + "\n")
})

server.listen(8080)
