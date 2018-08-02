declare namespace sun {
    namespace awt {
        namespace image {
class ImageRepresentation extends sun.awt.image.ImageWatched implements java.awt.image.ImageConsumer {
    protected cmodel: java.awt.image.ColorModel
    public constructor(arg0: sun.awt.image.ToolkitImage, arg1: java.awt.image.ColorModel, arg2: boolean)
    public reconstruct(arg0: int): void
    public setDimensions(arg0: int, arg1: int): void
    public getWidth(): int
    public getHeight(): int
    protected createImage(arg0: java.awt.image.ColorModel, arg1: java.awt.image.WritableRaster, arg2: boolean, arg3: java.util.Hashtable): java.awt.image.BufferedImage
    public setProperties(arg0: java.util.Hashtable<any, any>): void
    public setColorModel(arg0: java.awt.image.ColorModel): void
    public setHints(arg0: int): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
    public getOpaqueRGBImage(): java.awt.image.BufferedImage
    public imageComplete(arg0: int): void
    public notifyWatcherListEmpty(): void
    public prepare(arg0: java.awt.image.ImageObserver): boolean
    public check(arg0: java.awt.image.ImageObserver): int
    public drawToBufImage(arg0: java.awt.Graphics, arg1: sun.awt.image.ToolkitImage, arg2: int, arg3: int, arg4: java.awt.Color, arg5: java.awt.image.ImageObserver): boolean
    public drawToBufImage(arg0: java.awt.Graphics, arg1: sun.awt.image.ToolkitImage, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.awt.Color, arg7: java.awt.image.ImageObserver): boolean
    public drawToBufImage(arg0: java.awt.Graphics, arg1: sun.awt.image.ToolkitImage, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: java.awt.Color, arg11: java.awt.image.ImageObserver): boolean
    public drawToBufImage(arg0: java.awt.Graphics, arg1: sun.awt.image.ToolkitImage, arg2: java.awt.geom.AffineTransform, arg3: java.awt.image.ImageObserver): boolean
    public setAccelerationPriority(arg0: float): void
    public static class: java.lang.Class<any>
}

        }
    }
}