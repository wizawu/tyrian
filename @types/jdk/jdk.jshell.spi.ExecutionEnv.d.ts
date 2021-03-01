declare namespace jdk {
  namespace jshell {
    namespace spi {

      interface ExecutionEnv {

        userIn(): java.io.InputStream
        userOut(): java.io.PrintStream
        userErr(): java.io.PrintStream
        extraRemoteVMOptions(): java.util.List<java.lang.String>
        closeDown(): void
      }

    }
  }
}
