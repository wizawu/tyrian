declare namespace java {
    namespace rmi {
        class Naming {
            public static lookup(arg0: java.lang.String | string): java.rmi.Remote
            public static bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
            public static unbind(arg0: java.lang.String | string): void
            public static rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
            public static list(arg0: java.lang.String | string): java.lang.String[]
            public static class: java.lang.Class<any>
        }
    }
}