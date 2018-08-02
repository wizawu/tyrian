declare namespace java {
    namespace lang {
        namespace ref {
            class ReferenceQueue<T> {
                public poll(): java.lang.ref.Reference<T>
                public remove(): java.lang.ref.Reference<T>
                public remove(arg0: long): java.lang.ref.Reference<T>
                public constructor()
                public static class: java.lang.Class<any>
            }
        }
    }
}