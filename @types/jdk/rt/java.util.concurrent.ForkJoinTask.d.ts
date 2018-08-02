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
                public cancel(arg0: boolean): boolean
                public isDone(): boolean
                public isCancelled(): boolean
                public isCompletedAbnormally(): boolean
                public isCompletedNormally(): boolean
                public getException(): java.lang.Throwable
                public completeExceptionally(arg0: java.lang.Throwable): void
                public complete(arg0: V): void
                public quietlyComplete(): void
                public get(): V
                public get(arg0: long, arg1: java.util.concurrent.TimeUnit): V
                public quietlyJoin(): void
                public quietlyInvoke(): void
                public static helpQuiesce(): void
                public reinitialize(): void
                public static getPool(): java.util.concurrent.ForkJoinPool
                public static inForkJoinPool(): boolean
                public tryUnfork(): boolean
                public static getQueuedTaskCount(): int
                public static getSurplusQueuedTaskCount(): int
                public getRawResult(): V
                protected setRawResult(arg0: V): void
                protected exec(): boolean
                protected static peekNextLocalTask(): java.util.concurrent.ForkJoinTask<any>
                protected static pollNextLocalTask(): java.util.concurrent.ForkJoinTask<any>
                protected static pollTask(): java.util.concurrent.ForkJoinTask<any>
                public getForkJoinTaskTag(): short
                public setForkJoinTaskTag(arg0: short): short
                public compareAndSetForkJoinTaskTag(arg0: short, arg1: short): boolean
                public static adapt(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.ForkJoinTask<any>
                public static adapt<T>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: T): java.util.concurrent.ForkJoinTask<T>
                public static adapt<T>(arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$Lambda<T>): java.util.concurrent.ForkJoinTask<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}