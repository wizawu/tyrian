#load "Init.fsx"

open Orsql.Test

type User = {
    firstname: string
    lastname: string
    age: int
}

connection.Execute(
    "INSERT INTO user values(@firstname, @lastname, 17)",
    [("@firstname", "wiza"); ("@lastname", "wu")]
)

match connection.One<User>("SELECT * FROM user WHERE lastname = @lastname", [("@lastname", "wu")]) with
| Some user -> printfn "%s" user.firstname
| None -> printfn "not found"

connection.Close()