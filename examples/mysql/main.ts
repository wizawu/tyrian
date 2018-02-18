import uuid from "uuid"

const HikariDataSource = com.zaxxer.hikari.HikariDataSource
const JdbcTemplate = org.springframework.jdbc.core.JdbcTemplate
const Spark = spark.Spark

const DB = "test"
const TABLE = "object"
const USER = "root"

const dataSource = new HikariDataSource()
dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver")
dataSource.setJdbcUrl(`jdbc:mysql://localhost/${DB}?user=${USER}&useSSL=false`)

const jdbcTemplate = new JdbcTemplate(dataSource)
jdbcTemplate.execute(`
    CREATE TABLE IF NOT EXISTS ${TABLE} (
        id VARCHAR(40) PRIMARY KEY,
        object JSON
    )
`)

Spark.post("/", (req, res) => {
    // Use NPM package `uuid`
    let id = uuid.v4().toString()
    jdbcTemplate.update(`INSERT INTO ${TABLE} VALUES(?, ?)`, [id, req.body()])
    // Use JavaScript `JSON.stringify`
    return JSON.stringify({ id }) + "\n"
})

Spark.get("/:id", (req, res) => {
    let id = req.params(":id")
    let object = jdbcTemplate.queryForObject(`
        SELECT object FROM ${TABLE} WHERE id = ?
    `, [id], java.lang.String.class)
    return object + "\n"
})
