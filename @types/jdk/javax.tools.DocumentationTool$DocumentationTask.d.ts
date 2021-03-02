declare namespace javax {
  namespace tools {

    interface DocumentationTool$DocumentationTask extends java.util.concurrent.Callable<java.lang.Boolean> {
      addModules(arg0: java.lang.Iterable<java.lang.String>): void
      setLocale(arg0: java.util.Locale): void
      call(): java.lang.Boolean
      call(): java.lang.Object
    }

  }
}
