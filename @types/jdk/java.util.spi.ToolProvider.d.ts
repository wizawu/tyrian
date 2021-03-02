declare namespace java {
  namespace util {
    namespace spi {

      interface ToolProvider {
        name(): java.lang.String
        run(arg0: java.io.PrintWriter, arg1: java.io.PrintWriter, ...arg2: java.lang.String[]): int
        run(arg0: java.io.PrintStream, arg1: java.io.PrintStream, ...arg2: java.lang.String[]): int
        findFirst(arg0: java.lang.String): java.util.Optional<java.util.spi.ToolProvider>
      }

    }
  }
}
