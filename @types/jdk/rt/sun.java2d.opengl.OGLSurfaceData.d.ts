declare namespace sun {
    namespace java2d {
        namespace opengl {
abstract class OGLSurfaceData extends sun.java2d.SurfaceData implements sun.java2d.pipe.hw.AccelSurface {
    public static PBUFFER: int
    public static FBOBJECT: int
    public static PF_INT_ARGB: int
    public static PF_INT_ARGB_PRE: int
    public static PF_INT_RGB: int
    public static PF_INT_RGBX: int
    public static PF_INT_BGR: int
    public static PF_INT_BGRX: int
    public static PF_USHORT_565_RGB: int
    public static PF_USHORT_555_RGB: int
    public static PF_USHORT_555_RGBX: int
    public static PF_BYTE_GRAY: int
    public static PF_USHORT_GRAY: int
    public static PF_3BYTE_BGR: int
    protected type: int
    protected static oglRenderPipe: sun.java2d.opengl.OGLRenderer
    protected static oglTxRenderPipe: sun.java2d.pipe.PixelToParallelogramConverter
    protected static oglAAPgramPipe: sun.java2d.pipe.ParallelogramPipe
    protected static oglTextPipe: sun.java2d.opengl.OGLTextRenderer
    protected static oglImagePipe: sun.java2d.opengl.OGLDrawImage
    protected initTexture(arg0: long, arg1: boolean, arg2: boolean, arg3: boolean, arg4: int, arg5: int): boolean
    protected initFBObject(arg0: long, arg1: boolean, arg2: boolean, arg3: boolean, arg4: int, arg5: int): boolean
    protected initFlipBackbuffer(arg0: long): boolean
    protected initPbuffer(arg0: long, arg1: long, arg2: boolean, arg3: int, arg4: int): boolean
    protected constructor(arg0: sun.java2d.opengl.OGLGraphicsConfig, arg1: java.awt.image.ColorModel, arg2: int)
    public makeProxyFor(arg0: sun.java2d.SurfaceData): sun.java2d.SurfaceDataProxy
    protected initSurface(arg0: int, arg1: int): void
    public getContext(): sun.java2d.opengl.OGLContext
    public getType(): int
    public getTextureTarget(): int
    public getTextureID(): int
    public getNativeResource(arg0: int): long
    public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
    public canRenderLCDText(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): boolean
    public validatePipe(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): void
    protected getMaskFill(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): sun.java2d.loops.MaskFill
    public copyArea(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): boolean
    public flush(): void
    public getNativeBounds(): java.awt.Rectangle
    public getContext(): sun.java2d.pipe.BufferedContext
    public static class: java.lang.Class<any>
}

        }
    }
}