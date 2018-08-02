declare namespace java {
    namespace awt {
class Cursor implements java.io.Serializable {
    public static DEFAULT_CURSOR: int
    public static CROSSHAIR_CURSOR: int
    public static TEXT_CURSOR: int
    public static WAIT_CURSOR: int
    public static SW_RESIZE_CURSOR: int
    public static SE_RESIZE_CURSOR: int
    public static NW_RESIZE_CURSOR: int
    public static NE_RESIZE_CURSOR: int
    public static N_RESIZE_CURSOR: int
    public static S_RESIZE_CURSOR: int
    public static W_RESIZE_CURSOR: int
    public static E_RESIZE_CURSOR: int
    public static HAND_CURSOR: int
    public static MOVE_CURSOR: int
    protected static predefined: java.awt.Cursor[]
    public static CUSTOM_CURSOR: int
    protected name: string
    public static getPredefinedCursor(arg0: int): java.awt.Cursor
    public static getSystemCustomCursor(arg0: java.lang.String | string): java.awt.Cursor
    public static getDefaultCursor(): java.awt.Cursor
    public constructor(arg0: int)
    protected constructor(arg0: java.lang.String | string)
    public getType(): int
    public getName(): string
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}