declare namespace java {
    namespace util {
        namespace concurrent {
            class ScheduledThreadPoolExecutor$DelayedWorkQueue extends java.util.AbstractQueue<java.lang.Runnable> implements java.util.concurrent.BlockingQueue<java.lang.Runnable> {
                public contains(arg0: java.lang.Object): boolean
                public remove(arg0: java.lang.Object): boolean
                public size(): int
                public isEmpty(): boolean
                public remainingCapacity(): int
                public peek(): java.util.concurrent.RunnableScheduledFuture<any>
                public offer(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): boolean
                public put(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public add(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): boolean
                public offer(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
                public poll(): java.util.concurrent.RunnableScheduledFuture<any>
                public take(): java.util.concurrent.RunnableScheduledFuture<any>
                public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): java.util.concurrent.RunnableScheduledFuture<any>
                public clear(): void
                public drainTo(arg0: java.util.Collection<java.lang.Runnable>): int
                public drainTo(arg0: java.util.Collection<java.lang.Runnable>, arg1: int): int
                public toArray(): java.lang.Object[]
                public toArray<T>(arg0: T[]): T[]
                public iterator<T>(): java.util.Iterator<java.lang.Runnable>
                public add<T>(arg0: java.lang.Object): boolean
                public peek<T>(): java.lang.Object
                public poll<T>(): java.lang.Object
                public offer<T>(arg0: java.lang.Object): boolean
                public poll<T>(arg0: long, arg1: java.util.concurrent.TimeUnit): java.lang.Object
                public take<T>(): java.lang.Object
                public offer<T>(arg0: java.lang.Object, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
                public put<T>(arg0: java.lang.Object): void
                public static class: java.lang.Class<any>
            }
        }
    }
}