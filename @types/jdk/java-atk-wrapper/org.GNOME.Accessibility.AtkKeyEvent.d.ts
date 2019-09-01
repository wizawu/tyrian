declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkKeyEvent {
                public static readonly ATK_KEY_EVENT_PRESSED: int
                public static readonly ATK_KEY_EVENT_RELEASED: int
                public type: int
                public isShiftKeyDown: boolean
                public isCtrlKeyDown: boolean
                public isAltKeyDown: boolean
                public isMetaKeyDown: boolean
                public keyval: int
                public string: string
                public keycode: int
                public timestamp: int
                public constructor(arg0: java.awt.event.KeyEvent)
                public static class: java.lang.Class<any>
            }
        }
    }
}