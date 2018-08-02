declare namespace java {
    namespace util {
        namespace concurrent {
            class ForkJoinTask$AdaptedRunnable<T> extends java.util.concurrent.ForkJoinTask<T> implements java.util.concurrent.RunnableFuture<T> {
                public getRawResult(): T
                public setRawResult(arg0: T): void
                public exec(): boolean
                public run(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}