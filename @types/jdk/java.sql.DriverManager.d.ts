declare namespace java {
  namespace sql {
    class DriverManager {
      static readonly SET_LOG_PERMISSION: java.sql.SQLPermission
      static readonly DEREGISTER_DRIVER_PERMISSION: java.sql.SQLPermission
      public static getLogWriter(): java.io.PrintWriter
      public static setLogWriter(arg0: java.io.PrintWriter): void
      public static getConnection(arg0: java.lang.String | string, arg1: java.util.Properties): java.sql.Connection
      public static getConnection(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      ): java.sql.Connection
      public static getConnection(arg0: java.lang.String | string): java.sql.Connection
      public static getDriver(arg0: java.lang.String | string): java.sql.Driver
      public static registerDriver(arg0: java.sql.Driver): void
      public static registerDriver(
        arg0: java.sql.Driver,
        arg1: java.sql.DriverAction | java.sql.DriverAction$$lambda
      ): void
      public static deregisterDriver(arg0: java.sql.Driver): void
      public static getDrivers(): java.util.Enumeration<java.sql.Driver>
      public static drivers(): java.util.stream.Stream<java.sql.Driver>
      public static setLoginTimeout(arg0: number | java.lang.Integer): void
      public static getLoginTimeout(): number
      public static setLogStream(arg0: java.io.PrintStream): void
      public static getLogStream(): java.io.PrintStream
      public static println(arg0: java.lang.String | string): void
    }
  }
}
