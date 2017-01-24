module Orsql.Connection

#r "MySql.Data/lib/net40/MySql.Data.dll"
#load "Result.fsx"

open MySql.Data.MySqlClient
open Orsql.Result

type ConnectionOptions = {
    server: string
    user: string
    database: string
    port: string
    password: string
}

type IConnection =
    abstract member One: string -> (string * string) list -> 'T option
    abstract member List: string -> (string * string) list -> 'T list

let MySQLConnection(options: ConnectionOptions) = { new IConnection with
    let connection = new MySqlConnection(sprintf
        "server=%s;user=%s;database=%s;port=%s;password=%s"
        options.server options.user options.database options.port options.password
    )

    member this.One<'T> sql parameters =
        let command = new MySqlCommand(sql, connection)
        parameters |> List.map (fun (k, v) -> command.Parameters.AddWithValue(k, v)) |> ignore
        let reader = command.ExecuteReader()
        if reader.Read() then
            let result = Some(Result.ReadAsObject<'T>(reader))
            reader.Close()
            result
        else
            reader.Close()
            None

    member this.List<'T> sql parameters =
        let command = new MySqlCommand(sql, connection)
        parameters |> List.map (fun (k, v) -> command.Parameters.AddWithValue(k, v)) |> ignore
        let reader = command.ExecuteReader()
        Seq.toList(seq {
            while reader.Read() do
                yield Result.ReadAsObject<'T>(reader)
            reader.Close()
        })
}