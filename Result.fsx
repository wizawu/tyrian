module Orsql.Result

#r "System.Configuration.dll"
#r "Newtonsoft.Json/lib/net40/Newtonsoft.Json.dll"
#r "MySql.Data/lib/net40/MySql.Data.dll"

open Newtonsoft.Json
open Newtonsoft.Json.Linq
open MySql.Data.MySqlClient

let ReadAsObject<'T> (reader: MySqlDataReader) : 'T =
    let json = new JObject()
    for i = 0 to reader.FieldCount - 1 do
        json.Add(reader.GetName(i), JValue(reader.GetValue(i)))
    JsonConvert.DeserializeObject<'T>(json.ToString())