declare namespace sun {
    namespace java2d {
        namespace pipe {
class NullPipe implements sun.java2d.pipe.PixelDrawPipe , sun.java2d.pipe.PixelFillPipe , sun.java2d.pipe.ShapeDrawPipe , sun.java2d.pipe.TextPipe , sun.java2d.pipe.DrawImagePipe {
    public constructor()
    public drawLine(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public drawRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public fillRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public drawRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    public fillRoundRect(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    public drawOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public fillOval(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int): void
    public drawArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    public fillArc(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): void
    public drawPolyline(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
    public drawPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
    public fillPolygon(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int[], arg2: int[], arg3: int): void
    public draw(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
    public fill(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Shape): void
    public drawString(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.lang.String | string, arg2: double, arg3: double): void
    public drawGlyphVector(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.font.GlyphVector, arg2: float, arg3: float): void
    public drawChars(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int): void
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