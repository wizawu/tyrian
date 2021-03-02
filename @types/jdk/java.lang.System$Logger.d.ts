declare namespace java {
  namespace lang {

    interface System$Logger {
      getName(): java.lang.String
      isLoggable(arg0: java.lang.System$Logger$Level): boolean
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.String | string): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.Object | any): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>, arg2: java.lang.Throwable): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.ResourceBundle, arg2: java.lang.String | string, arg3: java.lang.Throwable): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.ResourceBundle, arg2: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): void
    }

  }
}
