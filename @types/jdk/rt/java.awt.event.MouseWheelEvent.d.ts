declare namespace java {
    namespace awt {
        namespace event {
            class MouseWheelEvent extends java.awt.event.MouseEvent {
                public static WHEEL_UNIT_SCROLL: int
                public static WHEEL_BLOCK_SCROLL: int
                public constructor(arg0: java.awt.Component, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean, arg8: int, arg9: int, arg10: int)
                public constructor(arg0: java.awt.Component, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: boolean, arg10: int, arg11: int, arg12: int)
                public constructor(arg0: java.awt.Component, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: boolean, arg10: int, arg11: int, arg12: int, arg13: double)
                public getScrollType(): int
                public getScrollAmount(): int
                public getWheelRotation(): int
                public getPreciseWheelRotation(): double
                public getUnitsToScroll(): int
                public paramString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}