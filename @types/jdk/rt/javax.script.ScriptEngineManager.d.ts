declare namespace javax {
    namespace script {
class ScriptEngineManager {
    public constructor()
    public constructor(arg0: java.lang.ClassLoader)
    public setBindings(arg0: javax.script.Bindings): void
    public getBindings(): javax.script.Bindings
    public put(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public get(arg0: java.lang.String | string): java.lang.Object
    public getEngineByName(arg0: java.lang.String | string): javax.script.ScriptEngine
    public getEngineByExtension(arg0: java.lang.String | string): javax.script.ScriptEngine
    public getEngineByMimeType(arg0: java.lang.String | string): javax.script.ScriptEngine
    public getEngineFactories(): java.util.List<javax.script.ScriptEngineFactory>
    public registerEngineName(arg0: java.lang.String | string, arg1: javax.script.ScriptEngineFactory): void
    public registerEngineMimeType(arg0: java.lang.String | string, arg1: javax.script.ScriptEngineFactory): void
    public registerEngineExtension(arg0: java.lang.String | string, arg1: javax.script.ScriptEngineFactory): void
    public static class: java.lang.Class<any>
}

    }
}