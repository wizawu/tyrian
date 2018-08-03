declare namespace java {
    namespace lang {
        class ThreadLocal<T> {
            protected initialValue(): T
            public static withInitial<S>(arg0: java.util.function$.Supplier<S> | java.util.function$.Supplier$$Lambda<S>): java.lang.ThreadLocal<S>
            public constructor()
            public get<S>(): T
            public set<S>(arg0: T): void
            public remove<S>(): void
            public static class: java.lang.Class<any>
        }
    }
}