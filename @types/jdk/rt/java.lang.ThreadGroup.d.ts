declare namespace java {
    namespace lang {
        class ThreadGroup implements java.lang.Thread$UncaughtExceptionHandler {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String | string)
            public getName(): string
            public getParent(): java.lang.ThreadGroup
            public getMaxPriority(): int
            public isDaemon(): boolean
            public isDestroyed(): boolean
            public setDaemon(arg0: boolean): void
            public setMaxPriority(arg0: int): void
            public parentOf(arg0: java.lang.ThreadGroup): boolean
            public checkAccess(): void
            public activeCount(): int
            public enumerate(arg0: java.lang.Thread[]): int
            public enumerate(arg0: java.lang.Thread[], arg1: boolean): int
            public activeGroupCount(): int
            public enumerate(arg0: java.lang.ThreadGroup[]): int
            public enumerate(arg0: java.lang.ThreadGroup[], arg1: boolean): int
            public stop(): void
            public interrupt(): void
            public suspend(): void
            public resume(): void
            public destroy(): void
            public list(): void
            public uncaughtException(arg0: java.lang.Thread, arg1: java.lang.Throwable): void
            public allowThreadSuspension(arg0: boolean): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}