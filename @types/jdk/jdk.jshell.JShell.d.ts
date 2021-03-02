declare namespace jdk {
  namespace jshell {

    class JShell implements java.lang.AutoCloseable {
      readonly maps: jdk.jshell.SnippetMaps
      readonly keyMap: jdk.jshell.KeyMap
      readonly outerMap: jdk.jshell.OuterWrapMap
      readonly taskFactory: jdk.jshell.TaskFactory
      readonly in: java.io.InputStream
      readonly out: java.io.PrintStream
      readonly err: java.io.PrintStream
      readonly tempVariableNameGenerator: java.util.function$.Supplier<java.lang.String>
      readonly idGenerator: java.util.function$.BiFunction<jdk.jshell.Snippet,java.lang.Integer,java.lang.String>
      readonly extraRemoteVMOptions: java.util.List<java.lang.String>
      readonly extraCompilerOptions: java.util.List<java.lang.String>
      readonly fileManagerMapping: java.util.function$.Function<javax.tools.StandardJavaFileManager,javax.tools.StandardJavaFileManager>
      readonly eval: jdk.jshell.Eval
      readonly classTracker: jdk.jshell.ClassTracker
      constructor(arg0: jdk.jshell.JShell$Builder)
      public static create(): jdk.jshell.JShell
      public static builder(): jdk.jshell.JShell$Builder
      public sourceCodeAnalysis(): jdk.jshell.SourceCodeAnalysis
      public eval(arg0: java.lang.String | string): java.util.List<jdk.jshell.SnippetEvent>
      public drop(arg0: jdk.jshell.Snippet): java.util.List<jdk.jshell.SnippetEvent>
      public addToClasspath(arg0: java.lang.String | string): void
      public stop(): void
      public close(): void
      public snippets(): java.util.stream.Stream<jdk.jshell.Snippet>
      public variables(): java.util.stream.Stream<jdk.jshell.VarSnippet>
      public methods(): java.util.stream.Stream<jdk.jshell.MethodSnippet>
      public types(): java.util.stream.Stream<jdk.jshell.TypeDeclSnippet>
      public imports(): java.util.stream.Stream<jdk.jshell.ImportSnippet>
      public status(arg0: jdk.jshell.Snippet): jdk.jshell.Snippet$Status
      public diagnostics(arg0: jdk.jshell.Snippet): java.util.stream.Stream<jdk.jshell.Diag>
      public unresolvedDependencies(arg0: jdk.jshell.DeclarationSnippet): java.util.stream.Stream<java.lang.String>
      public varValue(arg0: jdk.jshell.VarSnippet): java.lang.String
      public onSnippetEvent(arg0: java.util.function$.Consumer<jdk.jshell.SnippetEvent>): jdk.jshell.JShell$Subscription
      public onShutdown(arg0: java.util.function$.Consumer<jdk.jshell.JShell>): jdk.jshell.JShell$Subscription
      public unsubscribe(arg0: jdk.jshell.JShell$Subscription): void
      executionControl(): jdk.jshell.spi.ExecutionControl
      debug(arg0: number | java.lang.Integer, arg1: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): void
      debug(arg0: java.lang.Throwable, arg1: java.lang.String | string): void
      nextKeyIndex(): number
      closeDown(): void
      checkIfAlive(): void
      messageFormat(arg0: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.String
    }

  }
}
