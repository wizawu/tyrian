declare namespace java {
    namespace awt {
        abstract class AWTEvent extends java.util.EventObject {
            protected id: int
            protected consumed: boolean
            public static COMPONENT_EVENT_MASK: long
            public static CONTAINER_EVENT_MASK: long
            public static FOCUS_EVENT_MASK: long
            public static KEY_EVENT_MASK: long
            public static MOUSE_EVENT_MASK: long
            public static MOUSE_MOTION_EVENT_MASK: long
            public static WINDOW_EVENT_MASK: long
            public static ACTION_EVENT_MASK: long
            public static ADJUSTMENT_EVENT_MASK: long
            public static ITEM_EVENT_MASK: long
            public static TEXT_EVENT_MASK: long
            public static INPUT_METHOD_EVENT_MASK: long
            public static PAINT_EVENT_MASK: long
            public static INVOCATION_EVENT_MASK: long
            public static HIERARCHY_EVENT_MASK: long
            public static HIERARCHY_BOUNDS_EVENT_MASK: long
            public static MOUSE_WHEEL_EVENT_MASK: long
            public static WINDOW_STATE_EVENT_MASK: long
            public static WINDOW_FOCUS_EVENT_MASK: long
            public static RESERVED_ID_MAX: int
            public constructor(arg0: java.awt.Event)
            public constructor(arg0: java.lang.Object, arg1: int)
            public setSource(arg0: java.lang.Object): void
            public getID(): int
            public toString(): string
            public paramString(): string
            protected consume(): void
            protected isConsumed(): boolean
            public static class: java.lang.Class<any>
        }
    }
}