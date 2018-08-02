declare namespace java {
    namespace lang {
        namespace ref {
            abstract class Reference<T> {
                public clear(): void
                public enqueue(): boolean
                public get(): T
                public isEnqueued(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}