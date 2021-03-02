declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {

        class NashornScriptEngine extends javax.script.AbstractScriptEngine implements javax.script.Compilable, javax.script.Invocable {
          public static readonly NASHORN_GLOBAL: java.lang.String
          static readonly $assertionsDisabled: boolean
          constructor(arg0: jdk.nashorn.api.scripting.NashornScriptEngineFactory, arg1: java.lang.String[], arg2: java.lang.ClassLoader, arg3: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$lambda)
          public eval(arg0: java.io.Reader, arg1: javax.script.ScriptContext): java.lang.Object
          public eval(arg0: java.lang.String | string, arg1: javax.script.ScriptContext): java.lang.Object
          public getFactory(): javax.script.ScriptEngineFactory
          public createBindings(): javax.script.Bindings
          public compile(arg0: java.io.Reader): javax.script.CompiledScript
          public compile(arg0: java.lang.String | string): javax.script.CompiledScript
          public invokeFunction(arg0: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.Object
          public invokeMethod(arg0: java.lang.Object | any, arg1: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.Object
          public getInterface<T>(arg0: java.lang.Class<T>): T
          public getInterface<T>(arg0: java.lang.Object | any, arg1: java.lang.Class<T>): T
        }

      }
    }
  }
}
