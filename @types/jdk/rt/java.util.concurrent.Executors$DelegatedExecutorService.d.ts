declare namespace java {
    namespace util {
        namespace concurrent {
class Executors$DelegatedExecutorService extends java.util.concurrent.AbstractExecutorService {
    public execute(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    public shutdown(): void
    public shutdownNow(): java.util.List<java.lang.Runnable>
    public isShutdown(): boolean
    public isTerminated(): boolean
    public awaitTermination(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
    public submit(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.Future<any>
    public submit<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.Future<T>
    public submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.Future<T>
    public invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): java.util.List<java.util.concurrent.Future<T>>
    public invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.List<java.util.concurrent.Future<T>>
    public invokeAny<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): T
    public invokeAny<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>, arg1: long, arg2: java.util.concurrent.TimeUnit): T
    public static class: java.lang.Class<any>
}

        }
    }
}