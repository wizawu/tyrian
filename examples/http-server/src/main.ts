const App = org.rapidoid.setup.App
const On = org.rapidoid.setup.On

App.run(["on.port=8080"])
On.get("/").plain("Hello, Tyrian\n")

java.lang.Thread.sleep(3600 * 1000)
