declare namespace jdk {
  namespace jshell {
    namespace execution {

      interface LoaderDelegate {
        load(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        classesRedefined(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        addToClasspath(arg0: java.lang.String | string): void
        findClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      }

    }
  }
}
