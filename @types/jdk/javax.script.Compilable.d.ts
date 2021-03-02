declare namespace javax {
  namespace script {

    interface Compilable {
      compile(arg0: java.lang.String): javax.script.CompiledScript
      compile(arg0: java.io.Reader): javax.script.CompiledScript
    }

  }
}
