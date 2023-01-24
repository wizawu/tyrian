declare namespace java {
  namespace rmi {
    namespace server {
      class LogStream extends java.io.PrintStream {
        public static readonly SILENT: int
        public static readonly BRIEF: int
        public static readonly VERBOSE: int
        public static log(arg0: java.lang.String | string): java.rmi.server.LogStream
        public static getDefaultStream(): java.io.PrintStream
        public static setDefaultStream(arg0: java.io.PrintStream): void
        public getOutputStream(): java.io.OutputStream
        public setOutputStream(arg0: java.io.OutputStream): void
        public write(arg0: number | java.lang.Integer): void
        public write(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public toString(): java.lang.String
        public static parseLevel(arg0: java.lang.String | string): number
      }
    }
  }
}
