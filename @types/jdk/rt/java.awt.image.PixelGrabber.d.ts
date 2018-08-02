declare namespace java {
    namespace awt {
        namespace image {
class PixelGrabber implements java.awt.image.ImageConsumer {
    public constructor(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: int, arg7: int)
    public constructor(arg0: java.awt.image.ImageProducer, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: int, arg7: int)
    public constructor(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean)
    public startGrabbing(): void
    public abortGrabbing(): void
    public grabPixels(): boolean
    public grabPixels(arg0: long): boolean
    public getStatus(): int
    public getWidth(): int
    public getHeight(): int
    public getPixels(): java.lang.Object
    public getColorModel(): java.awt.image.ColorModel
    public setDimensions(arg0: int, arg1: int): void
    public setHints(arg0: int): void
    public setProperties(arg0: java.util.Hashtable<any, any>): void
    public setColorModel(arg0: java.awt.image.ColorModel): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
    public imageComplete(arg0: int): void
    public status(): int
    public static class: java.lang.Class<any>
}

        }
    }
}