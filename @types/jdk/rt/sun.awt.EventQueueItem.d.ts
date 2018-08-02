declare namespace sun {
    namespace awt {
        class EventQueueItem {
            public event: java.awt.AWTEvent
            public next: sun.awt.EventQueueItem
            public constructor(arg0: java.awt.AWTEvent)
            public static class: java.lang.Class<any>
        }
    }
}