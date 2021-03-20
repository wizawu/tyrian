const JsonParser = com.google.gson.JsonParser
const jsonObject = new JsonParser().parse("{ \"value\": 3 }").getAsJsonObject()
let value = jsonObject.get("value").getAsInt()
java.lang.System.out.println(value)
