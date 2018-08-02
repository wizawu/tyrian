declare namespace sun {
    namespace nio {
        namespace ch {
            class CompletedFuture<V> implements java.util.concurrent.Future<V> {
                public get(): V
                public get(arg0: long, arg1: java.util.concurrent.TimeUnit): V
                public isCancelled(): boolean
                public isDone(): boolean
                public cancel(arg0: boolean): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}