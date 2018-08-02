declare namespace java {
    namespace util {
        class Properties extends java.util.Hashtable<java.lang.Object, java.lang.Object> {
            protected defaults: java.util.Properties
            public constructor()
            public constructor(arg0: java.util.Properties)
            public setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
            public load(arg0: java.io.Reader): void
            public load(arg0: java.io.InputStream): void
            public save(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): void
            public store(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string): void
            public store(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): void
            public loadFromXML(arg0: java.io.InputStream): void
            public storeToXML(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): void
            public storeToXML(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: java.lang.String | string): void
            public getProperty(arg0: java.lang.String | string): string
            public getProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public propertyNames(): java.util.Enumeration<any>
            public stringPropertyNames(): java.util.Set<java.lang.String>
            public list(arg0: java.io.PrintStream): void
            public list(arg0: java.io.PrintWriter): void
            public static class: java.lang.Class<any>
        }
    }
}