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
    abstract member Open: unit -> unit
    abstract member Close: unit -> unit
    abstract member One: string * (string * string) list -> 'a option
    abstract member List: string * (string * string) list -> 'a list

type MySQLConnection(options: ConnectionOptions) =
    let connection = new MySqlConnection(sprintf
        "server=%s;user=%s;database=%s;port=%s;password=%s"
        options.server options.user options.database options.port options.password
    )

    interface IConnection with
        member x.Open() =
            connection.Open()

        member x.Close() =
            connection.Close()

        member x.One<'a>(sql, parameters) =
            let command = new MySqlCommand(sql, connection)
            parameters |> List.map (fun (k, v) -> command.Parameters.AddWithValue(k, v)) |> ignore
            let reader = command.ExecuteReader()
            if reader.Read() then
                let result = Some(Result.ReadAsObject<'a>(reader))
                reader.Close()
                result
            else
                reader.Close()
                None

        member x.List<'a>(sql, parameters) =
            let command = new MySqlCommand(sql, connection)
            parameters |> List.map (fun (k, v) -> command.Parameters.AddWithValue(k, v)) |> ignore
            let reader = command.ExecuteReader()
            Seq.toList(seq {
                while reader.Read() do
                    yield Result.ReadAsObject<'a>(reader)
                reader.Close()
            })