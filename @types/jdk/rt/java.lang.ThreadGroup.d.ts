declare namespace java {
    namespace lang {
        class ThreadGroup implements java.lang.Thread$UncaughtExceptionHandler {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String | string)
            public activeCount(): int
            public activeGroupCount(): int
            public allowThreadSuspension(arg0: boolean): boolean
            public checkAccess(): void
            public destroy(): void
            public enumerate(arg0: java.lang.Thread[]): int
            public enumerate(arg0: java.lang.Thread[], arg1: boolean): int
            public enumerate(arg0: java.lang.ThreadGroup[]): int
            public enumerate(arg0: java.lang.ThreadGroup[], arg1: boolean): int
            public getMaxPriority(): int
            public getName(): string
            public getParent(): java.lang.ThreadGroup
            public interrupt(): void
            public isDaemon(): boolean
            public isDestroyed(): boolean
            public list(): void
            public parentOf(arg0: java.lang.ThreadGroup): boolean
            public resume(): void
            public setDaemon(arg0: boolean): void
            public setMaxPriority(arg0: int): void
            public stop(): void
            public suspend(): void
            public toString(): string
            public uncaughtException(arg0: java.lang.Thread, arg1: java.lang.Throwable): void
            public static class: java.lang.Class<any>
        }
    }
}