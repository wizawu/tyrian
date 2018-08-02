declare namespace java {
    namespace awt {
        class EventDispatchThread extends java.lang.Thread {
            public stopDispatching(): void
            public run(): void
            public getEventQueue(): java.awt.EventQueue
            public setEventQueue(arg0: java.awt.EventQueue): void
            public static class: java.lang.Class<any>
        }
    }
}