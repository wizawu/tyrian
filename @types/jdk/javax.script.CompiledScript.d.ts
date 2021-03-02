declare namespace javax {
  namespace script {

    abstract class CompiledScript {
      public constructor()
      public abstract eval(arg0: javax.script.ScriptContext): java.lang.Object
      public eval(arg0: javax.script.Bindings): java.lang.Object
      public eval(): java.lang.Object
      public abstract getEngine(): javax.script.ScriptEngine
    }

  }
}
