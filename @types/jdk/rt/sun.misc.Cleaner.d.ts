declare namespace sun {
    namespace misc {
        class Cleaner extends java.lang.ref.PhantomReference<java.lang.Object> {
            public static create(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): sun.misc.Cleaner
            public clean(): void
            public static class: java.lang.Class<any>
        }
    }
}