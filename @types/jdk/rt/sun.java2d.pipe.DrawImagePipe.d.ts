declare namespace sun {
    namespace java2d {
        namespace pipe {
interface DrawImagePipe {
    copyImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: java.awt.Color, arg5: java.awt.image.ImageObserver): boolean
    copyImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: java.awt.Color, arg9: java.awt.image.ImageObserver): boolean
    scaleImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.awt.Color, arg7: java.awt.image.ImageObserver): boolean
    scaleImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: java.awt.Color, arg11: java.awt.image.ImageObserver): boolean
    transformImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.Image, arg2: java.awt.geom.AffineTransform, arg3: java.awt.image.ImageObserver): boolean
    transformImage(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: java.awt.image.BufferedImage, arg2: java.awt.image.BufferedImageOp, arg3: int, arg4: int): void
}

        }
    }
}