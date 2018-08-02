declare namespace jdk {
    namespace nashorn {
        namespace api {
            namespace scripting {
                class NashornScriptEngine extends javax.script.AbstractScriptEngine implements javax.script.Compilable , javax.script.Invocable {
                    public static NASHORN_GLOBAL: string
                    public eval(arg0: java.io.Reader, arg1: javax.script.ScriptContext): java.lang.Object
                    public eval(arg0: java.lang.String | string, arg1: javax.script.ScriptContext): java.lang.Object
                    public getFactory(): javax.script.ScriptEngineFactory
                    public createBindings(): javax.script.Bindings
                    public compile(arg0: java.io.Reader): javax.script.CompiledScript
                    public compile(arg0: java.lang.String | string): javax.script.CompiledScript
                    public invokeFunction(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.lang.Object
                    public invokeMethod(arg0: java.lang.Object, arg1: java.lang.String | string, ...arg2: java.lang.Object[]): java.lang.Object
                    public getInterface<T>(arg0: java.lang.Class<T>): T
                    public getInterface<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}