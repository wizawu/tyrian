declare namespace sun {
    namespace swing {
        abstract class AccumulativeRunnable<T> implements java.lang.Runnable {
            public constructor()
            protected run(arg0: java.util.List<T>): void
            public run(): void
            public add(...arg0: T[]): void
            protected submit(): void
            public static class: java.lang.Class<any>
        }
        abstract class AccumulativeRunnable$$Lambda<T> implements java.lang.Runnable {
            public constructor()
        }
    }
}