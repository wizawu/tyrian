declare namespace sun {
    namespace misc {
        class Service<S> {
            public static providers<S>(arg0: java.lang.Class<S>, arg1: java.lang.ClassLoader): java.util.Iterator<S>
            public static providers<S>(arg0: java.lang.Class<S>): java.util.Iterator<S>
            public static installedProviders<S>(arg0: java.lang.Class<S>): java.util.Iterator<S>
            public static class: java.lang.Class<any>
        }
    }
}