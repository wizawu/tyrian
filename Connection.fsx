module Orsql.Connection

#r "MySql.Data/lib/net40/MySql.Data.dll"

#load "Result.fsx"

open MySql.Data.MySqlClient
open Orsql.Result

type ConnectionOptions = {
    Server: string
    User: string
    Database: string
    Port: string
    Password: string
}

type IConnection =
    abstract member Open: unit -> unit
    abstract member Close: unit -> unit
    abstract member One: string * (string * string) list -> 'a option
    abstract member List: string * (string * string) list -> 'a list
    abstract member Execute: string * (string * string) list -> unit

type MySQLConnection(options: ConnectionOptions) =
    let connection = new MySqlConnection(sprintf
        "server=%s;user=%s;database=%s;port=%s;password=%s"
        options.Server options.User options.Database options.Port options.Password
    )

    let prepareReader(sql, parameters): MySqlDataReader =
        let command = new MySqlCommand(sql, connection)
        parameters |> List.map (fun (k, v) -> command.Parameters.AddWithValue(k, v)) |> ignore
        command.ExecuteReader()

    interface IConnection with
        member x.Open() =
            connection.Open()

        member x.Close() =
            connection.Close()

        member x.One<'a>(sql, parameters) =
            let reader = prepareReader(sql, parameters)
            if reader.Read() then
                let result = Some(Result.ReadAsObject<'a>(reader))
                reader.Close()
                result
            else
                reader.Close()
                None

        member x.List<'a>(sql, parameters) =
            let reader = prepareReader(sql, parameters)
            Seq.toList(seq {
                while reader.Read() do
                    yield Result.ReadAsObject<'a>(reader)
                reader.Close()
            })

        member x.Execute(sql, parameters) =
            let reader = prepareReader(sql, parameters)
            reader.Close()