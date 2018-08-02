declare namespace sun {
    namespace awt {
        interface AWTAccessor$EventQueueAccessor {
            getDispatchThread(arg0: java.awt.EventQueue): java.lang.Thread
            isDispatchThreadImpl(arg0: java.awt.EventQueue): boolean
            removeSourceEvents(arg0: java.awt.EventQueue, arg1: java.lang.Object, arg2: boolean): void
            noEvents(arg0: java.awt.EventQueue): boolean
            wakeup(arg0: java.awt.EventQueue, arg1: boolean): void
            invokeAndWait(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            setFwDispatcher(arg0: java.awt.EventQueue, arg1: sun.awt.FwDispatcher): void
            getMostRecentEventTime(arg0: java.awt.EventQueue): long
        }
    }
}