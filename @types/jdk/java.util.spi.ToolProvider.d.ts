declare namespace java {
  namespace util {
    namespace spi {
      interface ToolProvider {
        name(): java.lang.String
        run(arg0: java.io.PrintWriter, arg1: java.io.PrintWriter, ...vargs: (java.lang.String | string)[]): number
        run(arg0: java.io.PrintStream, arg1: java.io.PrintStream, ...vargs: (java.lang.String | string)[]): number
        findFirst(arg0: java.lang.String | string): java.util.Optional<java.util.spi.ToolProvider>
      }
    }
  }
}
