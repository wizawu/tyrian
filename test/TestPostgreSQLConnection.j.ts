/// <reference path="index.d.ts" />

import { PostgreSQLConnection, Options } from "../index"

const { assertThat } = org.assertj.core.api.Assertions

function test(testCase: any) {
    let options: Options = {
        host: "127.0.0.1",
        port: 5432,
        database: "test",
        user: "postgres",
        password: "wizawu3306",
    }
    let connection = new PostgreSQLConnection(options)
    testCase(connection)
    connection.close()
}

test((connection: PostgreSQLConnection) => {
    connection.ensureTable("account")
})

test((connection: PostgreSQLConnection) => {
    connection.ensureColumn("account", "id", "TEXT")
    connection.ensureColumn("account", "firstname", "VARCHAR(64)")
    connection.ensureColumn("account", "lastname", "VARCHAR(64)")
    connection.ensureColumn("account", "age", "INT")
})

test((connection: PostgreSQLConnection) => {
    connection.ensureIndex("account", ["firstname", "lastname"])
})

test((connection: PostgreSQLConnection) => {
    connection.ensureUniqueIndex("account", ["id"])
})

test((connection: PostgreSQLConnection) => {
    let user = connection.one<User>("SELECT * FROM account WHERE lastname = ?", ["Zhang"]) as User
    assertThat(user.firstname).isEqualTo("Jenny")
    assertThat(user.age).isEqualTo(16)
})

test((connection: PostgreSQLConnection) => {
    let users = connection.list<User>("SELECT * FROM account WHERE age = ?", [17])
    assertThat(users.length).isEqualTo(2)
    assertThat(users[0].lastname.toLowerCase()).isEqualTo("wu")
})

test((connection: PostgreSQLConnection) => {
    let user: User = {
        firstname: "Harold",
        lastname: "Finch",
        age: 20
    }
    connection.save("account", user, "firstname")
    assertThat(connection.one<User>("SELECT * FROM account WHERE lastname = ?", ["Finch"])).isNotNull()
    assertThat(connection.list<User>("SELECT * FROM account WHERE lastname = ?", ["Finch"]).length).isEqualTo(1)
})
