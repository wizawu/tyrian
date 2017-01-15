#r "packages/Suave/lib/net40/Suave.dll"
#r "packages/FSharp.Data/lib/net40/FSharp.Data.dll"

open Suave

open FSharp.Data

type Simple = JsonProvider<""" { "name":"John", "age":94 } """>

Simple.Name