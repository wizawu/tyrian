declare namespace java {
    namespace awt {
class Event implements java.io.Serializable {
    public static SHIFT_MASK: int
    public static CTRL_MASK: int
    public static META_MASK: int
    public static ALT_MASK: int
    public static HOME: int
    public static END: int
    public static PGUP: int
    public static PGDN: int
    public static UP: int
    public static DOWN: int
    public static LEFT: int
    public static RIGHT: int
    public static F1: int
    public static F2: int
    public static F3: int
    public static F4: int
    public static F5: int
    public static F6: int
    public static F7: int
    public static F8: int
    public static F9: int
    public static F10: int
    public static F11: int
    public static F12: int
    public static PRINT_SCREEN: int
    public static SCROLL_LOCK: int
    public static CAPS_LOCK: int
    public static NUM_LOCK: int
    public static PAUSE: int
    public static INSERT: int
    public static ENTER: int
    public static BACK_SPACE: int
    public static TAB: int
    public static ESCAPE: int
    public static DELETE: int
    public static WINDOW_DESTROY: int
    public static WINDOW_EXPOSE: int
    public static WINDOW_ICONIFY: int
    public static WINDOW_DEICONIFY: int
    public static WINDOW_MOVED: int
    public static KEY_PRESS: int
    public static KEY_RELEASE: int
    public static KEY_ACTION: int
    public static KEY_ACTION_RELEASE: int
    public static MOUSE_DOWN: int
    public static MOUSE_UP: int
    public static MOUSE_MOVE: int
    public static MOUSE_ENTER: int
    public static MOUSE_EXIT: int
    public static MOUSE_DRAG: int
    public static SCROLL_LINE_UP: int
    public static SCROLL_LINE_DOWN: int
    public static SCROLL_PAGE_UP: int
    public static SCROLL_PAGE_DOWN: int
    public static SCROLL_ABSOLUTE: int
    public static SCROLL_BEGIN: int
    public static SCROLL_END: int
    public static LIST_SELECT: int
    public static LIST_DESELECT: int
    public static ACTION_EVENT: int
    public static LOAD_FILE: int
    public static SAVE_FILE: int
    public static GOT_FOCUS: int
    public static LOST_FOCUS: int
    public target: java.lang.Object
    public when: long
    public id: int
    public x: int
    public y: int
    public key: int
    public modifiers: int
    public clickCount: int
    public arg: java.lang.Object
    public evt: java.awt.Event
    public constructor(arg0: java.lang.Object, arg1: long, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.lang.Object)
    public constructor(arg0: java.lang.Object, arg1: long, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int)
    public constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object)
    public translate(arg0: int, arg1: int): void
    public shiftDown(): boolean
    public controlDown(): boolean
    public metaDown(): boolean
    protected paramString(): string
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}