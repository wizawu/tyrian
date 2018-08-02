declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        class ServiceFinder<T> implements java.lang.Iterable<T> {
                            public static find<T>(arg0: java.lang.Class<T>, arg1: java.lang.ClassLoader, arg2: com.sun.xml.internal.ws.api.Component | com.sun.xml.internal.ws.api.Component$$Lambda): com.sun.xml.internal.ws.util.ServiceFinder<T>
                            public static find<T>(arg0: java.lang.Class<T>, arg1: com.sun.xml.internal.ws.api.Component | com.sun.xml.internal.ws.api.Component$$Lambda): com.sun.xml.internal.ws.util.ServiceFinder<T>
                            public static find<T>(arg0: java.lang.Class<T>, arg1: java.lang.ClassLoader): com.sun.xml.internal.ws.util.ServiceFinder<T>
                            public static find<T>(arg0: java.lang.Class<T>): com.sun.xml.internal.ws.util.ServiceFinder<T>
                            public iterator(): java.util.Iterator<T>
                            public toArray(): T[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}