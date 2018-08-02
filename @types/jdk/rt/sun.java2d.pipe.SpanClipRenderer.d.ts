declare namespace sun {
    namespace java2d {
        namespace pipe {
            class SpanClipRenderer implements sun.java2d.pipe.CompositePipe {
                public constructor(arg0: sun.java2d.pipe.CompositePipe)
                public startSequence(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape, arg2: java.awt.Rectangle, arg3: int[]): java.lang.Object
                public needTile(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int, arg4: int): boolean
                public renderPathTile(arg0: java.lang.Object, arg1: byte[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: sun.java2d.pipe.ShapeSpanIterator): void
                public renderPathTile(arg0: java.lang.Object, arg1: byte[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): void
                public fillTile(arg0: sun.java2d.pipe.RegionIterator, arg1: byte[], arg2: int, arg3: int, arg4: int[]): void
                public eraseTile(arg0: sun.java2d.pipe.RegionIterator, arg1: byte[], arg2: int, arg3: int, arg4: int[]): void
                public skipTile(arg0: java.lang.Object, arg1: int, arg2: int): void
                public endSequence(arg0: java.lang.Object): void
                public static class: java.lang.Class<any>
            }
        }
    }
}