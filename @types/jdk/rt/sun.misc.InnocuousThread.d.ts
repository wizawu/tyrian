declare namespace sun {
    namespace misc {
        class InnocuousThread extends java.lang.Thread {
            public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda)
            public getContextClassLoader(): java.lang.ClassLoader
            public setUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$Lambda): void
            public setContextClassLoader(arg0: java.lang.ClassLoader): void
            public run(): void
            public eraseThreadLocals(): void
            public static class: java.lang.Class<any>
        }
    }
}