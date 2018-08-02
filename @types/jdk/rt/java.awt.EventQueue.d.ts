declare namespace java {
    namespace awt {
        class EventQueue {
            public constructor()
            public postEvent(arg0: java.awt.AWTEvent): void
            public getNextEvent(): java.awt.AWTEvent
            public peekEvent(): java.awt.AWTEvent
            public peekEvent(arg0: int): java.awt.AWTEvent
            protected dispatchEvent(arg0: java.awt.AWTEvent): void
            public static getMostRecentEventTime(): long
            public static getCurrentEvent(): java.awt.AWTEvent
            public push(arg0: java.awt.EventQueue): void
            protected pop(): void
            public createSecondaryLoop(): java.awt.SecondaryLoop
            public static isDispatchThread(): boolean
            public static invokeLater(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public static invokeAndWait(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public static class: java.lang.Class<any>
        }
    }
}