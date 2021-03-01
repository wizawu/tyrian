declare namespace jdk {
  namespace jshell {

    class JShell$Builder {

      in: java.io.InputStream
      out: java.io.PrintStream
      err: java.io.PrintStream
      tempVariableNameGenerator: java.util.function$.Supplier<java.lang.String>
      idGenerator: java.util.function$.BiFunction<jdk.jshell.Snippet,java.lang.Integer,java.lang.String>
      extraRemoteVMOptions: java.util.List<java.lang.String>
      extraCompilerOptions: java.util.List<java.lang.String>
      executionControlProvider: jdk.jshell.spi.ExecutionControlProvider
      executionControlParameters: java.util.Map<java.lang.String,java.lang.String>
      executionControlSpec: java.lang.String
      fileManagerMapping: java.util.function$.Function<javax.tools.StandardJavaFileManager,javax.tools.StandardJavaFileManager>
      constructor()
      public in(arg0: java.io.InputStream): jdk.jshell.JShell$Builder
      public out(arg0: java.io.PrintStream): jdk.jshell.JShell$Builder
      public err(arg0: java.io.PrintStream): jdk.jshell.JShell$Builder
      public tempVariableNameGenerator(arg0: java.util.function$.Supplier<java.lang.String>): jdk.jshell.JShell$Builder
      public idGenerator(arg0: java.util.function$.BiFunction<jdk.jshell.Snippet,java.lang.Integer,java.lang.String>): jdk.jshell.JShell$Builder
      public remoteVMOptions(...arg0: java.lang.String[]): jdk.jshell.JShell$Builder
      public compilerOptions(...arg0: java.lang.String[]): jdk.jshell.JShell$Builder
      public executionEngine(arg0: java.lang.String): jdk.jshell.JShell$Builder
      public executionEngine(arg0: jdk.jshell.spi.ExecutionControlProvider, arg1: java.util.Map<java.lang.String,java.lang.String>): jdk.jshell.JShell$Builder
      public fileManager(arg0: java.util.function$.Function<javax.tools.StandardJavaFileManager,javax.tools.StandardJavaFileManager>): jdk.jshell.JShell$Builder
      public build(): jdk.jshell.JShell
    }

  }
}
