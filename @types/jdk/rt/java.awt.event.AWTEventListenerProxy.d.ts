declare namespace java {
    namespace awt {
        namespace event {
            class AWTEventListenerProxy extends java.util.EventListenerProxy<java.awt.event.AWTEventListener> implements java.awt.event.AWTEventListener {
                public constructor(arg0: long, arg1: java.awt.event.AWTEventListener)
                public eventDispatched(arg0: java.awt.AWTEvent): void
                public getEventMask(): long
                public static class: java.lang.Class<any>
            }
        }
    }
}