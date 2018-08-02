declare namespace java {
    namespace lang {
        namespace ref {
            class PhantomReference<T> extends java.lang.ref.Reference<T> {
                public get(): T
                public constructor(arg0: T, arg1: java.lang.ref.ReferenceQueue<T>)
                public static class: java.lang.Class<any>
            }
        }
    }
}