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

class Product extends Model {
    name = this.str()
    price = this.uuid()
}

str
unicode
int
float
Decimal
datetime
date
time
timedelta
bool
buffer - used for binary data in Python 2 and 3
bytes - used for binary data in Python 3
LongStr - used for large strings
LongUnicode - used for large strings
UUID
Json - used for mapping to native database JSON type

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
