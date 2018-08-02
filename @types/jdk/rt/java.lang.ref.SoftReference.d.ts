declare namespace java {
    namespace lang {
        namespace ref {
            class SoftReference<T> extends java.lang.ref.Reference<T> {
                public constructor(arg0: T, arg1: java.lang.ref.ReferenceQueue<T>)
                public constructor(arg0: T)
                public get(): T
                public static class: java.lang.Class<any>
            }
        }
    }
}