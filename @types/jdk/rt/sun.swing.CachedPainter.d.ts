declare namespace sun {
    namespace swing {
        abstract class CachedPainter {
            public constructor(arg0: int)
            public paint(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, ...arg6: java.lang.Object[]): void
            protected abstract paintToImage(arg0: java.awt.Component, arg1: java.awt.Image, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: java.lang.Object[]): void
            protected paintImage(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.awt.Image, arg7: java.lang.Object[]): void
            protected createImage(arg0: java.awt.Component, arg1: int, arg2: int, arg3: java.awt.GraphicsConfiguration, arg4: java.lang.Object[]): java.awt.Image
            protected flush(): void
            public static class: java.lang.Class<any>
        }
        interface CachedPainter$$Lambda {
            (arg0: java.awt.Component, arg1: java.awt.Image, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: java.lang.Object[]): void
        }
    }
}