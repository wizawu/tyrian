declare namespace java {
    namespace io {
        class Console implements java.io.Flushable {
            public writer(): java.io.PrintWriter
            public reader(): java.io.Reader
            public format(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.io.Console
            public printf(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.io.Console
            public readLine(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): string
            public readLine(): string
            public readPassword(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): char[]
            public readPassword(): char[]
            public flush(): void
            public static class: java.lang.Class<any>
        }
        class Console$$Lambda implements java.io.Flushable {
            public (): java.io.PrintWriter
        }
    }
}