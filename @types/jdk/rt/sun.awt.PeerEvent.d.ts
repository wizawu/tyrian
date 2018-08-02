declare namespace sun {
    namespace awt {
        class PeerEvent extends java.awt.event.InvocationEvent {
            public static PRIORITY_EVENT: long
            public static ULTIMATE_PRIORITY_EVENT: long
            public static LOW_PRIORITY_EVENT: long
            public constructor(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: long)
            public constructor(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.lang.Object, arg3: boolean, arg4: long)
            public getFlags(): long
            public coalesceEvents(arg0: sun.awt.PeerEvent): sun.awt.PeerEvent
            public static class: java.lang.Class<any>
        }
    }
}