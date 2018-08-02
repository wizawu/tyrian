declare namespace java {
    namespace awt {
        namespace event {
class AdjustmentEvent extends java.awt.AWTEvent {
    public static ADJUSTMENT_FIRST: int
    public static ADJUSTMENT_LAST: int
    public static ADJUSTMENT_VALUE_CHANGED: int
    public static UNIT_INCREMENT: int
    public static UNIT_DECREMENT: int
    public static BLOCK_DECREMENT: int
    public static BLOCK_INCREMENT: int
    public static TRACK: int
    public constructor(arg0: java.awt.Adjustable, arg1: int, arg2: int, arg3: int)
    public constructor(arg0: java.awt.Adjustable, arg1: int, arg2: int, arg3: int, arg4: boolean)
    public getAdjustable(): java.awt.Adjustable
    public getValue(): int
    public getAdjustmentType(): int
    public getValueIsAdjusting(): boolean
    public paramString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}