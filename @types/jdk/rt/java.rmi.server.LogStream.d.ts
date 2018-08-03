declare namespace java {
    namespace rmi {
        namespace server {
            class LogStream extends java.io.PrintStream {
                public static SILENT: int
                public static BRIEF: int
                public static VERBOSE: int
                public static log(arg0: java.lang.String | string): java.rmi.server.LogStream
                public static getDefaultStream(): java.io.PrintStream
                public static setDefaultStream(arg0: java.io.PrintStream): void
                public getOutputStream(): java.io.OutputStream
                public setOutputStream(arg0: java.io.OutputStream): void
                public write(arg0: int): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public toString(): string
                public static parseLevel(arg0: java.lang.String | string): int
                public static class: java.lang.Class<any>
            }
        }
    }
}