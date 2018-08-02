declare namespace java {
    namespace awt {
        namespace image {
class ReplicateScaleFilter extends java.awt.image.ImageFilter {
    protected srcWidth: int
    protected srcHeight: int
    protected destWidth: int
    protected destHeight: int
    protected srcrows: int[]
    protected srccols: int[]
    protected outpixbuf: java.lang.Object
    public constructor(arg0: int, arg1: int)
    public setProperties(arg0: java.util.Hashtable<any, any>): void
    public setDimensions(arg0: int, arg1: int): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}