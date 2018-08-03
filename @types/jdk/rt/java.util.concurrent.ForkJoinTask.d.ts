declare namespace java {
    namespace util {
        namespace concurrent {
            abstract class ForkJoinTask<V> implements java.util.concurrent.Future<V> , java.io.Serializable {
                public constructor()
                public fork(): java.util.concurrent.ForkJoinTask<V>
                public join(): V
                public invoke(): V
                public static invokeAll(arg0: java.util.concurrent.ForkJoinTask<any>, arg1: java.util.concurrent.ForkJoinTask<any>): void
                public static invokeAll(...arg0: java.util.concurrent.ForkJoinTask<any>[]): void
                public static invokeAll<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: java.util.Collection<T>): java.util.Collection<T>
                public cancel<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: boolean): boolean
                public isDone<T extends java.util.concurrent.ForkJoinTask<any>>(): boolean
                public isCancelled<T extends java.util.concurrent.ForkJoinTask<any>>(): boolean
                public isCompletedAbnormally<T extends java.util.concurrent.ForkJoinTask<any>>(): boolean
                public isCompletedNormally<T extends java.util.concurrent.ForkJoinTask<any>>(): boolean
                public getException<T extends java.util.concurrent.ForkJoinTask<any>>(): java.lang.Throwable
                public completeExceptionally<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: java.lang.Throwable): void
                public complete<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: V): void
                public quietlyComplete<T extends java.util.concurrent.ForkJoinTask<any>>(): void
                public get<T extends java.util.concurrent.ForkJoinTask<any>>(): V
                public get<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: long, arg1: java.util.concurrent.TimeUnit): V
                public quietlyJoin<T extends java.util.concurrent.ForkJoinTask<any>>(): void
                public quietlyInvoke<T extends java.util.concurrent.ForkJoinTask<any>>(): void
                public static helpQuiesce<T extends java.util.concurrent.ForkJoinTask<any>>(): void
                public reinitialize<T extends java.util.concurrent.ForkJoinTask<any>>(): void
                public static getPool<T extends java.util.concurrent.ForkJoinTask<any>>(): java.util.concurrent.ForkJoinPool
                public static inForkJoinPool<T extends java.util.concurrent.ForkJoinTask<any>>(): boolean
                public tryUnfork<T extends java.util.concurrent.ForkJoinTask<any>>(): boolean
                public static getQueuedTaskCount<T extends java.util.concurrent.ForkJoinTask<any>>(): int
                public static getSurplusQueuedTaskCount<T extends java.util.concurrent.ForkJoinTask<any>>(): int
                public abstract getRawResult<T extends java.util.concurrent.ForkJoinTask<any>>(): V
                protected abstract setRawResult<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: V): void
                protected abstract exec<T extends java.util.concurrent.ForkJoinTask<any>>(): boolean
                protected static peekNextLocalTask<T extends java.util.concurrent.ForkJoinTask<any>>(): java.util.concurrent.ForkJoinTask<any>
                protected static pollNextLocalTask<T extends java.util.concurrent.ForkJoinTask<any>>(): java.util.concurrent.ForkJoinTask<any>
                protected static pollTask<T extends java.util.concurrent.ForkJoinTask<any>>(): java.util.concurrent.ForkJoinTask<any>
                public getForkJoinTaskTag<T extends java.util.concurrent.ForkJoinTask<any>>(): short
                public setForkJoinTaskTag<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: short): short
                public compareAndSetForkJoinTaskTag<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: short, arg1: short): boolean
                public static adapt<T extends java.util.concurrent.ForkJoinTask<any>>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.ForkJoinTask<any>
                public static adapt<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.ForkJoinTask<T>
                public static adapt<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.ForkJoinTask<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}