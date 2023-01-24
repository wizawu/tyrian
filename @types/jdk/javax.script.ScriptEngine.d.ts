declare namespace javax {
  namespace script {
    interface ScriptEngine {
      readonly ARGV: java.lang.String
      readonly FILENAME: java.lang.String
      readonly ENGINE: java.lang.String
      readonly ENGINE_VERSION: java.lang.String
      readonly NAME: java.lang.String
      readonly LANGUAGE: java.lang.String
      readonly LANGUAGE_VERSION: java.lang.String
      eval(arg0: java.lang.String | string, arg1: javax.script.ScriptContext): java.lang.Object
      eval(arg0: java.io.Reader, arg1: javax.script.ScriptContext): java.lang.Object
      eval(arg0: java.lang.String | string): java.lang.Object
      eval(arg0: java.io.Reader): java.lang.Object
      eval(arg0: java.lang.String | string, arg1: javax.script.Bindings): java.lang.Object
      eval(arg0: java.io.Reader, arg1: javax.script.Bindings): java.lang.Object
      put(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      get(arg0: java.lang.String | string): java.lang.Object
      getBindings(arg0: number | java.lang.Integer): javax.script.Bindings
      setBindings(arg0: javax.script.Bindings, arg1: number | java.lang.Integer): void
      createBindings(): javax.script.Bindings
      getContext(): javax.script.ScriptContext
      setContext(arg0: javax.script.ScriptContext): void
      getFactory(): javax.script.ScriptEngineFactory
    }
  }
}
