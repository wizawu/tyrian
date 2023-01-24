declare namespace javax {
  namespace tools {
    interface JavaCompiler$CompilationTask extends java.util.concurrent.Callable<java.lang.Boolean> {
      addModules(arg0: java.lang.Iterable<java.lang.String>): void
      setProcessors(arg0: java.lang.Iterable<javax.annotation.processing.Processor>): void
      setLocale(arg0: java.util.Locale): void
      call(): boolean
      call(): java.lang.Object
    }
  }
}
