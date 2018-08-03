declare namespace java {
    namespace awt {
        namespace event {
            abstract class InputEvent extends java.awt.event.ComponentEvent {
                public static readonly SHIFT_MASK: int
                public static readonly CTRL_MASK: int
                public static readonly META_MASK: int
                public static readonly ALT_MASK: int
                public static readonly ALT_GRAPH_MASK: int
                public static readonly BUTTON1_MASK: int
                public static readonly BUTTON2_MASK: int
                public static readonly BUTTON3_MASK: int
                public static readonly SHIFT_DOWN_MASK: int
                public static readonly CTRL_DOWN_MASK: int
                public static readonly META_DOWN_MASK: int
                public static readonly ALT_DOWN_MASK: int
                public static readonly BUTTON1_DOWN_MASK: int
                public static readonly BUTTON2_DOWN_MASK: int
                public static readonly BUTTON3_DOWN_MASK: int
                public static readonly ALT_GRAPH_DOWN_MASK: int
                public static getMaskForButton(arg0: int): int
                public isShiftDown(): boolean
                public isControlDown(): boolean
                public isMetaDown(): boolean
                public isAltDown(): boolean
                public isAltGraphDown(): boolean
                public getWhen(): long
                public getModifiers(): int
                public getModifiersEx(): int
                public consume(): void
                public isConsumed(): boolean
                public static getModifiersExText(arg0: int): string
                public static class: java.lang.Class<any>
            }
        }
    }
}