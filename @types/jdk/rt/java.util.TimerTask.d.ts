declare namespace java {
    namespace util {
        abstract class TimerTask implements java.lang.Runnable {
            protected constructor()
            public abstract run(): void
            public cancel(): boolean
            public scheduledExecutionTime(): long
            public static class: java.lang.Class<any>
        }
        interface TimerTask$$Lambda implements java.lang.Runnable {
            (): void
        }
    }
}