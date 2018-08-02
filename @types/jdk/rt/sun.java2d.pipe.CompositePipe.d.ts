declare namespace sun {
    namespace java2d {
        namespace pipe {
interface CompositePipe {
    startSequence(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape, arg2: java.awt.Rectangle, arg3: int[]): java.lang.Object
    needTile(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int, arg4: int): boolean
    renderPathTile(arg0: java.lang.Object, arg1: byte[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): void
    skipTile(arg0: java.lang.Object, arg1: int, arg2: int): void
    endSequence(arg0: java.lang.Object): void
}

        }
    }
}