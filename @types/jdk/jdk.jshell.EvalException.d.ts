declare namespace jdk {
  namespace jshell {

    class EvalException extends jdk.jshell.JShellException {
      constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.StackTraceElement[], arg3: jdk.jshell.JShellException)
      public getExceptionClassName(): java.lang.String
      public getCause(): jdk.jshell.JShellException
      public getCause(): java.lang.Throwable
    }

  }
}
