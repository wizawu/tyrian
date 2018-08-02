declare namespace java {
    namespace awt {
        namespace event {
class ActionEvent extends java.awt.AWTEvent {
    public static SHIFT_MASK: int
    public static CTRL_MASK: int
    public static META_MASK: int
    public static ALT_MASK: int
    public static ACTION_FIRST: int
    public static ACTION_LAST: int
    public static ACTION_PERFORMED: int
    public constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.String | string)
    public constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.String | string, arg3: int)
    public constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.String | string, arg3: long, arg4: int)
    public getActionCommand(): string
    public getWhen(): long
    public getModifiers(): int
    public paramString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}