let db = Datebase({
    ...
})

abstract class Model {
    Number(): any {
        return 0
    }

    constructor(options?) {
        if (options) {
            this.Number = () => {
                return { columnType: "BIGINT" }
            }
        }
    }
}

let product = new Product({
    db: db,
    name: "product",
    primary: "name",
    engine: "",
    index: [
        [],
        [],
    ],
    unique: [
        [],
        [],
    ],
    fulltext: [
        [],
        [],
    ]
})

product.get({name: ""})
product.list({name: ""})
product.insert({...})
product.upsert({...})
product.delete({name: ""})

db.jdbcTemplate...
