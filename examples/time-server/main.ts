const Spark = spark.Spark

Spark.get("/", (req, res) => {
    // Use JavaScript `Date`
    return new Date().toLocaleString() + "\n"
})
