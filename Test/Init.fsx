module Orsql.Test

#load "../Connection.fsx"

open Orsql.Connection

let options = {
    Server = "localhost"
    User = "root"
    Database = "test"
    Port = "3306"
    Password = "root"
}

let connection = MySQLConnection(options) :> IConnection
connection.Open()