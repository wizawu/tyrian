import { constructor as Chalk } from "chalk"

const chalk = new Chalk({ enabled: true })
const Spark = spark.Spark

Spark.get("/hello", (req, res) => chalk.green("Hello World"))