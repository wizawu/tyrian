declare namespace java {
    namespace util {
        namespace concurrent {
            interface ExecutorService extends java.util.concurrent.Executor {
                shutdown(): void
                shutdownNow(): java.util.List<java.lang.Runnable>
                isShutdown(): boolean
                isTerminated(): boolean
                awaitTermination(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                submit<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.Future<T>
                submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.Future<T>
                submit<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.Future<any>
                invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): java.util.List<java.util.concurrent.Future<T>>
                invokeAll<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.List<java.util.concurrent.Future<T>>
                invokeAny<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>): T
                invokeAny<T>(arg0: java.util.Collection<java.util.concurrent.Callable<T>>, arg1: long, arg2: java.util.concurrent.TimeUnit): T
            }
        }
    }
}