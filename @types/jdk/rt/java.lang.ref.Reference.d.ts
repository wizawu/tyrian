declare namespace java {
    namespace lang {
        namespace ref {
            abstract class Reference<T> {
                public get(): T
                public clear(): void
                public isEnqueued(): boolean
                public enqueue(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}