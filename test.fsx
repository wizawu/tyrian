#load "Connection.fsx"

open Orsql.Connection

let options = {
    server = "localhost";
    user = "root";
    database = "test";
    port = "3306";
    password = "root";
}

type User = {
    firstname: string
    lastname: string
    age: int
}

let conn = MySQLConnection(options) :> IConnection
conn.Open()

match conn.One<User>("select * from user where firstname=@firstname", [("@firstname", "Jenny")]) with
| Some user -> System.Console.WriteLine user.age
| None -> printfn "none"