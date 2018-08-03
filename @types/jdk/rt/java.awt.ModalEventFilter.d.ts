declare namespace java {
    namespace awt {
        abstract class ModalEventFilter implements java.awt.EventFilter {
            protected modalDialog: java.awt.Dialog
            protected disabled: boolean
            protected constructor(arg0: java.awt.Dialog)
            public acceptEvent(arg0: java.awt.AWTEvent): java.awt.EventFilter$FilterAction
            protected acceptWindow(arg0: java.awt.Window): java.awt.EventFilter$FilterAction
            public static class: java.lang.Class<any>
        }
    }
}