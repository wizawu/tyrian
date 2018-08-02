declare namespace javax {
    namespace script {
        interface ScriptEngine {
            ARGV: string
            FILENAME: string
            ENGINE: string
            ENGINE_VERSION: string
            NAME: string
            LANGUAGE: string
            LANGUAGE_VERSION: string
            eval(arg0: java.lang.String | string, arg1: javax.script.ScriptContext): java.lang.Object
            eval(arg0: java.io.Reader, arg1: javax.script.ScriptContext): java.lang.Object
            eval(arg0: java.lang.String | string): java.lang.Object
            eval(arg0: java.io.Reader): java.lang.Object
            eval(arg0: java.lang.String | string, arg1: javax.script.Bindings): java.lang.Object
            eval(arg0: java.io.Reader, arg1: javax.script.Bindings): java.lang.Object
            put(arg0: java.lang.String | string, arg1: java.lang.Object): void
            get(arg0: java.lang.String | string): java.lang.Object
            getBindings(arg0: int): javax.script.Bindings
            setBindings(arg0: javax.script.Bindings, arg1: int): void
            createBindings(): javax.script.Bindings
            getContext(): javax.script.ScriptContext
            setContext(arg0: javax.script.ScriptContext): void
            getFactory(): javax.script.ScriptEngineFactory
        }
    }
}