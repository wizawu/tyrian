declare namespace sun {
    namespace java2d {
        namespace pipe {
class DrawImage implements sun.java2d.pipe.DrawImagePipe {
    public constructor()
    public copyImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: java.awt.Color): boolean
    public copyImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: java.awt.Color): boolean
    public scaleImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.awt.Color): boolean
    protected transformImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: java.awt.geom.AffineTransform, arg5: int): void
    protected transformImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: java.awt.geom.AffineTransform, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: java.awt.Color): void
    protected tryCopyOrScale(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.awt.Color, arg7: int, arg8: double[]): boolean
    protected renderImageXform(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: java.awt.geom.AffineTransform, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: java.awt.Color): void
    protected renderImageCopy(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: java.awt.Color, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int): boolean
    protected renderImageScale(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: java.awt.Color, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: double, arg9: double, arg10: double, arg11: double): boolean
    public scaleImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: java.awt.Color): boolean
    public static closeToInteger(arg0: int, arg1: double): boolean
    public static isSimpleTranslate(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): boolean
    protected static isBgOperation(arg0: sun.java2d.SurfaceData, arg1: java.awt.Color): boolean
    protected getBufferedImage(arg0: java.awt.Image): java.awt.image.BufferedImage
    protected blitSurfaceData(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: sun.java2d.pipe.Region, arg2: sun.java2d.SurfaceData, arg3: sun.java2d.SurfaceData, arg4: sun.java2d.loops.SurfaceType, arg5: sun.java2d.loops.SurfaceType, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: int, arg12: java.awt.Color): void
    protected scaleSurfaceData(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: sun.java2d.pipe.Region, arg2: sun.java2d.SurfaceData, arg3: sun.java2d.SurfaceData, arg4: sun.java2d.loops.SurfaceType, arg5: sun.java2d.loops.SurfaceType, arg6: int, arg7: int, arg8: int, arg9: int, arg10: double, arg11: double, arg12: double, arg13: double): boolean
    protected static imageReady(arg0: sun.awt.image.ToolkitImage, arg1: java.awt.image.ImageObserver): boolean
    public copyImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: java.awt.Color, arg5: java.awt.image.ImageObserver): boolean
    public copyImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: java.awt.Color, arg9: java.awt.image.ImageObserver): boolean
    public scaleImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.awt.Color, arg7: java.awt.image.ImageObserver): boolean
    public scaleImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: java.awt.Color, arg11: java.awt.image.ImageObserver): boolean
    public transformImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: java.awt.geom.AffineTransform, arg3: java.awt.image.ImageObserver): boolean
    public transformImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.image.BufferedImage, arg2: java.awt.image.BufferedImageOp, arg3: int, arg4: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}