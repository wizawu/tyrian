declare namespace java {
    namespace awt {
        namespace event {
abstract class InputEvent extends java.awt.event.ComponentEvent {
    public static SHIFT_MASK: int
    public static CTRL_MASK: int
    public static META_MASK: int
    public static ALT_MASK: int
    public static ALT_GRAPH_MASK: int
    public static BUTTON1_MASK: int
    public static BUTTON2_MASK: int
    public static BUTTON3_MASK: int
    public static SHIFT_DOWN_MASK: int
    public static CTRL_DOWN_MASK: int
    public static META_DOWN_MASK: int
    public static ALT_DOWN_MASK: int
    public static BUTTON1_DOWN_MASK: int
    public static BUTTON2_DOWN_MASK: int
    public static BUTTON3_DOWN_MASK: int
    public static ALT_GRAPH_DOWN_MASK: int
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