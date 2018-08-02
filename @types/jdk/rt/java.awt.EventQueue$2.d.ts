declare namespace java {
    namespace awt {
        class EventQueue$2 implements sun.awt.AWTAccessor$EventQueueAccessor {
            public getDispatchThread(arg0: java.awt.EventQueue): java.lang.Thread
            public isDispatchThreadImpl(arg0: java.awt.EventQueue): boolean
            public removeSourceEvents(arg0: java.awt.EventQueue, arg1: java.lang.Object, arg2: boolean): void
            public noEvents(arg0: java.awt.EventQueue): boolean
            public wakeup(arg0: java.awt.EventQueue, arg1: boolean): void
            public invokeAndWait(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public setFwDispatcher(arg0: java.awt.EventQueue, arg1: sun.awt.FwDispatcher): void
            public getMostRecentEventTime(arg0: java.awt.EventQueue): long
            public static class: java.lang.Class<any>
        }
    }
}