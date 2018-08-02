declare namespace java {
    namespace awt {
        class WaitDispatchSupport implements java.awt.SecondaryLoop {
            public constructor(arg0: java.awt.EventDispatchThread)
            public constructor(arg0: java.awt.EventDispatchThread, arg1: java.awt.Conditional | java.awt.Conditional$$Lambda)
            public constructor(arg0: java.awt.EventDispatchThread, arg1: java.awt.Conditional | java.awt.Conditional$$Lambda, arg2: java.awt.EventFilter | java.awt.EventFilter$$Lambda, arg3: long)
            public enter(): boolean
            public exit(): boolean
            public static class: java.lang.Class<any>
        }
    }
}