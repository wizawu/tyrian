#r "Newtonsoft.Json/lib/net40/Newtonsoft.Json.dll"
#load "Connection.fsx"

open Newtonsoft.Json.Linq
open Orsql.Connection

let json = JObject()
json.Add("name", JValue("wizawu"))
System.Console.WriteLine(json.ToString())

let options = {
    server = "localhost";
    user = "root";
    database = "test";
    port = "3306";
    password = "root";
}

let conn = new MySQLConnection(options)

type Name = {
    firstname: string
    lastname: string
}

conn.One<Name>()