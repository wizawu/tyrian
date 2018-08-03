declare namespace sun {
    namespace awt {
        class AWTAutoShutdown implements java.lang.Runnable {
            public static getInstance(): sun.awt.AWTAutoShutdown
            public static notifyToolkitThreadBusy(): void
            public static notifyToolkitThreadFree(): void
            public notifyThreadBusy(arg0: java.lang.Thread): void
            public notifyThreadFree(arg0: java.lang.Thread): void
            public run(): void
            public static class: java.lang.Class<any>
        }
    }
}