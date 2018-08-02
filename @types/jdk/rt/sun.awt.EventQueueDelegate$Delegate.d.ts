declare namespace sun {
    namespace awt {
interface EventQueueDelegate$Delegate {
    getNextEvent(arg0: java.awt.EventQueue): java.awt.AWTEvent
    beforeDispatch(arg0: java.awt.AWTEvent): java.lang.Object
    afterDispatch(arg0: java.awt.AWTEvent, arg1: java.lang.Object): void
}

    }
}