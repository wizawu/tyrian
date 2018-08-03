declare namespace java {
    namespace util {
        namespace concurrent {
            interface ScheduledExecutorService extends java.util.concurrent.ExecutorService {
                schedule(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
                schedule<V>(arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$Lambda<V>, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<V>
                scheduleAtFixedRate<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
                scheduleWithFixedDelay<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
            }
        }
    }
}