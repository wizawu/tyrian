declare namespace javax {
    namespace imageio {
class ImageTypeSpecifier {
    protected colorModel: java.awt.image.ColorModel
    protected sampleModel: java.awt.image.SampleModel
    public constructor(arg0: java.awt.image.ColorModel, arg1: java.awt.image.SampleModel)
    public constructor(arg0: java.awt.image.RenderedImage)
    public static createPacked(arg0: java.awt.color.ColorSpace, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean): javax.imageio.ImageTypeSpecifier
    public static createInterleaved(arg0: java.awt.color.ColorSpace, arg1: int[], arg2: int, arg3: boolean, arg4: boolean): javax.imageio.ImageTypeSpecifier
    public static createBanded(arg0: java.awt.color.ColorSpace, arg1: int[], arg2: int[], arg3: int, arg4: boolean, arg5: boolean): javax.imageio.ImageTypeSpecifier
    public static createGrayscale(arg0: int, arg1: int, arg2: boolean): javax.imageio.ImageTypeSpecifier
    public static createGrayscale(arg0: int, arg1: int, arg2: boolean, arg3: boolean): javax.imageio.ImageTypeSpecifier
    public static createIndexed(arg0: byte[], arg1: byte[], arg2: byte[], arg3: byte[], arg4: int, arg5: int): javax.imageio.ImageTypeSpecifier
    public static createFromBufferedImageType(arg0: int): javax.imageio.ImageTypeSpecifier
    public static createFromRenderedImage(arg0: java.awt.image.RenderedImage): javax.imageio.ImageTypeSpecifier
    public getBufferedImageType(): int
    public getNumComponents(): int
    public getNumBands(): int
    public getBitsPerBand(arg0: int): int
    public getSampleModel(): java.awt.image.SampleModel
    public getSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
    public getColorModel(): java.awt.image.ColorModel
    public createBufferedImage(arg0: int, arg1: int): java.awt.image.BufferedImage
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

    }
}