/// <reference path="index.d.ts" />

import { MariaDBConnection, Options } from "../../src/index"

const { assertThat } = org.assertj.core.api.Assertions

function test(testCase: any) {
    let options: Options = {
        host: "127.0.0.1",
        port: 3306,
        database: "test",
        user: "root",
        password: "wizawu3306",
    }
    let connection = new MariaDBConnection(options)
    testCase(connection)
    connection.close()
}

test((connection: MariaDBConnection) => {
    connection.ensureTable("user")
})

test((connection: MariaDBConnection) => {
    connection.ensureColumn("user", "firstname", "VARCHAR(64)")
    connection.ensureColumn("user", "lastname", "VARCHAR(64)")
})

test((connection: MariaDBConnection) => {
    connection.ensureIndex("user", ["firstname", "lastname"])
})

test((connection: MariaDBConnection) => {
    connection.ensureUniqueIndex("user", ["id"])
})

test((connection: MariaDBConnection) => {
    let user = connection.one<User>("SELECT * FROM user WHERE lastname = ?", ["Zhang"]) as User
    assertThat(user.firstname).isEqualTo("Jenny")
    assertThat(user.age).isEqualTo(16)
})

test((connection: MariaDBConnection) => {
    let users = connection.list<User>("SELECT * FROM user WHERE age = ?", [17])
    assertThat(users.length).isEqualTo(2)
    assertThat(users[0].lastname.toLowerCase()).isEqualTo("wu")
})

test((connection: MariaDBConnection) => {
    let user: User = {
        firstname: "Harold",
        lastname: "Finch",
        age: 20
    }
    connection.save("user", user, "firstname")
    assertThat(connection.one<User>("SELECT * FROM user WHERE lastname = ?", ["Finch"])).isNotNull()
    assertThat(connection.list<User>("SELECT * FROM user WHERE lastname = ?", ["Finch"]).length).isEqualTo(1)
})
