declare namespace java {
    namespace lang {
        class Thread implements java.lang.Runnable {
            public static readonly MIN_PRIORITY: int
            public static readonly NORM_PRIORITY: int
            public static readonly MAX_PRIORITY: int
            public static currentThread(): java.lang.Thread
            public static yield(): void
            public static sleep(arg0: long): void
            public static sleep(arg0: long, arg1: int): void
            protected clone(): java.lang.Object
            public constructor()
            public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda)
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.lang.String | string, arg3: long)
            public start(): void
            public run(): void
            public stop(): void
            public stop(arg0: java.lang.Throwable): void
            public interrupt(): void
            public static interrupted(): boolean
            public isInterrupted(): boolean
            public destroy(): void
            public isAlive(): boolean
            public suspend(): void
            public resume(): void
            public setPriority(arg0: int): void
            public getPriority(): int
            public setName(arg0: java.lang.String | string): void
            public getName(): string
            public getThreadGroup(): java.lang.ThreadGroup
            public static activeCount(): int
            public static enumerate(arg0: java.lang.Thread[]): int
            public countStackFrames(): int
            public join(arg0: long): void
            public join(arg0: long, arg1: int): void
            public join(): void
            public static dumpStack(): void
            public setDaemon(arg0: boolean): void
            public isDaemon(): boolean
            public checkAccess(): void
            public toString(): string
            public getContextClassLoader(): java.lang.ClassLoader
            public setContextClassLoader(arg0: java.lang.ClassLoader): void
            public static holdsLock(arg0: java.lang.Object): boolean
            public getStackTrace(): java.lang.StackTraceElement[]
            public static getAllStackTraces(): java.util.Map<java.lang.Thread, java.lang.StackTraceElement[]>
            public getId(): long
            public getState(): java.lang.Thread$State
            public static setDefaultUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$Lambda): void
            public static getDefaultUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
            public getUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
            public setUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$Lambda): void
            public static class: java.lang.Class<any>
        }
    }
}