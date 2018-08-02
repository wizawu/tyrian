declare namespace sun {
    namespace awt {
        abstract class CustomCursor extends java.awt.Cursor {
            protected image: java.awt.Image
            public constructor(arg0: java.awt.Image, arg1: java.awt.Point, arg2: java.lang.String | string)
            protected createNativeCursor(arg0: java.awt.Image, arg1: int[], arg2: int, arg3: int, arg4: int, arg5: int): void
            public static class: java.lang.Class<any>
        }
    }
}