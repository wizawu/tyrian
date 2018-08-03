declare namespace java {
    namespace lang {
        class Thread implements java.lang.Runnable {
            public static MAX_PRIORITY: int
            public static MIN_PRIORITY: int
            public static NORM_PRIORITY: int
            public constructor()
            public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda)
            public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.lang.String | string, arg3: long)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String | string)
            public static activeCount(): int
            public checkAccess(): void
            public countStackFrames(): int
            public static currentThread(): java.lang.Thread
            public destroy(): void
            public static dumpStack(): void
            public static enumerate(arg0: java.lang.Thread[]): int
            public getContextClassLoader(): java.lang.ClassLoader
            public getName(): string
            public getPriority(): int
            public getThreadGroup(): java.lang.ThreadGroup
            public interrupt(): void
            public static interrupted(): boolean
            public isAlive(): boolean
            public isDaemon(): boolean
            public isInterrupted(): boolean
            public join(): void
            public join(arg0: long): void
            public join(arg0: long, arg1: int): void
            public resume(): void
            public run(): void
            public setContextClassLoader(arg0: java.lang.ClassLoader): void
            public setDaemon(arg0: boolean): void
            public setName(arg0: java.lang.String | string): void
            public setPriority(arg0: int): void
            public static sleep(arg0: long): void
            public static sleep(arg0: long, arg1: int): void
            public start(): void
            public stop(): void
            public stop(arg0: java.lang.Throwable): void
            public suspend(): void
            public toString(): string
            public static yield(): void
            public static holdsLock(arg0: java.lang.Object): boolean
            public getStackTrace(): java.lang.StackTraceElement[]
            public static getAllStackTraces(): java.util.Map<java.lang.Thread, java.lang.StackTraceElement[]>
            public getId(): long
            public getUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
            public setUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$Lambda): void
            public static getDefaultUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
            public static setDefaultUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$Lambda): void
            public getState(): java.lang.Thread$State
            protected clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}