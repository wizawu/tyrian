declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
class CompletedFuture<T> implements java.util.concurrent.Future<T> {
    public constructor(arg0: T, arg1: java.lang.Throwable)
    public cancel(arg0: boolean): boolean
    public isCancelled(): boolean
    public isDone(): boolean
    public get(): T
    public get(arg0: long, arg1: java.util.concurrent.TimeUnit): T
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}