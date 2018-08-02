declare namespace sun {
    namespace awt {
        class AWTAutoShutdown implements java.lang.Runnable {
            public static getInstance(): sun.awt.AWTAutoShutdown
            public static notifyToolkitThreadBusy(): void
            public static notifyToolkitThreadFree(): void
            public notifyThreadBusy(arg0: java.lang.Thread | java.lang.Thread$$Lambda): void
            public notifyThreadFree(arg0: java.lang.Thread | java.lang.Thread$$Lambda): void
            public run(): void
            public static class: java.lang.Class<any>
        }
        class AWTAutoShutdown$$Lambda implements java.lang.Runnable {
            public static (): sun.awt.AWTAutoShutdown
        }
    }
}