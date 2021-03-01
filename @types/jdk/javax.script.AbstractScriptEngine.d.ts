declare namespace javax {
  namespace script {

    abstract class AbstractScriptEngine implements javax.script.ScriptEngine {

      protected context: javax.script.ScriptContext
      public constructor()
      public constructor(arg0: javax.script.Bindings)
      public setContext(arg0: javax.script.ScriptContext): void
      public getContext(): javax.script.ScriptContext
      public getBindings(arg0: int): javax.script.Bindings
      public setBindings(arg0: javax.script.Bindings, arg1: int): void
      public put(arg0: java.lang.String, arg1: java.lang.Object): void
      public get(arg0: java.lang.String): java.lang.Object
      public eval(arg0: java.io.Reader, arg1: javax.script.Bindings): java.lang.Object
      public eval(arg0: java.lang.String, arg1: javax.script.Bindings): java.lang.Object
      public eval(arg0: java.io.Reader): java.lang.Object
      public eval(arg0: java.lang.String): java.lang.Object
      protected getScriptContext(arg0: javax.script.Bindings): javax.script.ScriptContext
    }

  }
}
