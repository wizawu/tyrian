declare namespace sun {
    namespace awt {
        class ModalityEvent extends java.awt.AWTEvent implements java.awt.ActiveEvent {
            public static readonly MODALITY_PUSHED: int
            public static readonly MODALITY_POPPED: int
            public constructor(arg0: java.lang.Object, arg1: sun.awt.ModalityListener, arg2: int)
            public dispatch(): void
            public static class: java.lang.Class<any>
        }
    }
}