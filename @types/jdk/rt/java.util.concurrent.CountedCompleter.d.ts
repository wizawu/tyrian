declare namespace java {
    namespace util {
        namespace concurrent {
            abstract class CountedCompleter<T> extends java.util.concurrent.ForkJoinTask<T> {
                protected constructor(arg0: java.util.concurrent.CountedCompleter<any> | java.util.concurrent.CountedCompleter$$Lambda<any>, arg1: int)
                protected constructor(arg0: java.util.concurrent.CountedCompleter<any> | java.util.concurrent.CountedCompleter$$Lambda<any>)
                protected constructor()
                public abstract compute(): void
                public onCompletion(arg0: java.util.concurrent.CountedCompleter<any> | java.util.concurrent.CountedCompleter$$Lambda<any>): void
                public onExceptionalCompletion(arg0: java.lang.Throwable, arg1: java.util.concurrent.CountedCompleter<any> | java.util.concurrent.CountedCompleter$$Lambda<any>): boolean
                public getCompleter(): java.util.concurrent.CountedCompleter<any>
                public getPendingCount(): int
                public setPendingCount(arg0: int): void
                public addToPendingCount(arg0: int): void
                public compareAndSetPendingCount(arg0: int, arg1: int): boolean
                public decrementPendingCountUnlessZero(): int
                public getRoot(): java.util.concurrent.CountedCompleter<any>
                public tryComplete(): void
                public propagateCompletion(): void
                public complete(arg0: T): void
                public firstComplete(): java.util.concurrent.CountedCompleter<any>
                public nextComplete(): java.util.concurrent.CountedCompleter<any>
                public quietlyCompleteRoot(): void
                public helpComplete(arg0: int): void
                protected exec(): boolean
                public getRawResult(): T
                protected setRawResult(arg0: T): void
                public static class: java.lang.Class<any>
            }
            interface CountedCompleter$$Lambda<T> extends java.util.concurrent.ForkJoinTask<T> {
                (): void
            }
        }
    }
}