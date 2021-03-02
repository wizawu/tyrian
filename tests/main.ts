const JsonParser = com.google.gson.JsonParser

const jsonObject = new JsonParser().parse("{ \"value\": 1 }").getAsJsonObject()
console.log(jsonObject.get("value").getAsInt())
java.lang.System.out.println("2")
