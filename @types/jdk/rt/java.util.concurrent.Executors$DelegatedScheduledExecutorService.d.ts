declare namespace java {
    namespace util {
        namespace concurrent {
class Executors$DelegatedScheduledExecutorService extends java.util.concurrent.Executors$DelegatedExecutorService implements java.util.concurrent.ScheduledExecutorService {
    public schedule(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
    public schedule<V>(arg0: java.util.concurrent.Callable<V> | java.util.concurrent.Callable$$Lambda<V>, arg1: long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<V>
    public scheduleAtFixedRate<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
    public scheduleWithFixedDelay<V>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: long, arg3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
    public static class: java.lang.Class<any>
}

        }
    }
}