declare namespace sun {
    namespace awt {
        abstract class X11CustomCursor extends sun.awt.CustomCursor {
            public constructor(arg0: java.awt.Image, arg1: java.awt.Point, arg2: java.lang.String | string)
            protected createNativeCursor(arg0: java.awt.Image, arg1: int[], arg2: int, arg3: int, arg4: int, arg5: int): void
            protected abstract createCursor(arg0: byte[], arg1: byte[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): void
            public static class: java.lang.Class<any>
        }
        interface X11CustomCursor$$Lambda extends sun.awt.CustomCursor {
            (arg0: byte[], arg1: byte[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): void
        }
    }
}