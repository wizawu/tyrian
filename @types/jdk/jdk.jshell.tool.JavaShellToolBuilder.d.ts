declare namespace jdk {
  namespace jshell {
    namespace tool {
      interface JavaShellToolBuilder {
        builder(): jdk.jshell.tool.JavaShellToolBuilder
        in(arg0: java.io.InputStream, arg1: java.io.InputStream): jdk.jshell.tool.JavaShellToolBuilder
        out(arg0: java.io.PrintStream): jdk.jshell.tool.JavaShellToolBuilder
        out(
          arg0: java.io.PrintStream,
          arg1: java.io.PrintStream,
          arg2: java.io.PrintStream
        ): jdk.jshell.tool.JavaShellToolBuilder
        err(arg0: java.io.PrintStream): jdk.jshell.tool.JavaShellToolBuilder
        err(arg0: java.io.PrintStream, arg1: java.io.PrintStream): jdk.jshell.tool.JavaShellToolBuilder
        persistence(arg0: java.util.prefs.Preferences): jdk.jshell.tool.JavaShellToolBuilder
        persistence(arg0: java.util.Map<java.lang.String, java.lang.String>): jdk.jshell.tool.JavaShellToolBuilder
        env(arg0: java.util.Map<java.lang.String, java.lang.String>): jdk.jshell.tool.JavaShellToolBuilder
        locale(arg0: java.util.Locale): jdk.jshell.tool.JavaShellToolBuilder
        promptCapture(arg0: boolean | java.lang.Boolean): jdk.jshell.tool.JavaShellToolBuilder
        interactiveTerminal(arg0: boolean | java.lang.Boolean): jdk.jshell.tool.JavaShellToolBuilder
        run(...vargs: (java.lang.String | string)[]): void
        start(...vargs: (java.lang.String | string)[]): number
      }
    }
  }
}
