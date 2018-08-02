declare namespace sun {
    namespace misc {
        class TimerThread extends java.lang.Thread {
            public static debug: boolean
            protected constructor()
            public run(): void
            protected static enqueue(arg0: sun.misc.Timer): void
            protected static dequeue(arg0: sun.misc.Timer): boolean
            protected static requeue(arg0: sun.misc.Timer): void
            public static class: java.lang.Class<any>
        }
    }
}