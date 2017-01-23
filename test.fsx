#r "Newtonsoft.Json/lib/net40/Newtonsoft.Json.dll"

open Newtonsoft.Json.Linq

let json = JObject()
json.Add("name", JValue("wizawu"))
System.Console.WriteLine(json.ToString())
