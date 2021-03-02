declare namespace java {
  namespace lang {

    interface System$Logger {
      getName(): java.lang.String
      isLoggable(arg0: java.lang.System$Logger$Level): boolean
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.String): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.function$.Supplier<java.lang.String>): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.Object): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.String, arg2: java.lang.Throwable): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.function$.Supplier<java.lang.String>, arg2: java.lang.Throwable): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.lang.String, ...arg2: java.lang.Object[]): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.ResourceBundle, arg2: java.lang.String, arg3: java.lang.Throwable): void
      log(arg0: java.lang.System$Logger$Level, arg1: java.util.ResourceBundle, arg2: java.lang.String, ...arg3: java.lang.Object[]): void
    }

  }
}
