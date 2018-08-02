declare namespace java {
    namespace awt {
        namespace image {
abstract class ColorModel implements java.awt.Transparency {
    protected pixel_bits: int
    protected transferType: int
    public static getRGBdefault(): java.awt.image.ColorModel
    public constructor(arg0: int)
    protected constructor(arg0: int, arg1: int[], arg2: java.awt.color.ColorSpace, arg3: boolean, arg4: boolean, arg5: int, arg6: int)
    public hasAlpha(): boolean
    public isAlphaPremultiplied(): boolean
    public getTransferType(): int
    public getPixelSize(): int
    public getComponentSize(arg0: int): int
    public getComponentSize(): int[]
    public getTransparency(): int
    public getNumComponents(): int
    public getNumColorComponents(): int
    public getRed(arg0: int): int
    public getGreen(arg0: int): int
    public getBlue(arg0: int): int
    public getAlpha(arg0: int): int
    public getRGB(arg0: int): int
    public getRed(arg0: java.lang.Object): int
    public getGreen(arg0: java.lang.Object): int
    public getBlue(arg0: java.lang.Object): int
    public getAlpha(arg0: java.lang.Object): int
    public getRGB(arg0: java.lang.Object): int
    public getDataElements(arg0: int, arg1: java.lang.Object): java.lang.Object
    public getComponents(arg0: int, arg1: int[], arg2: int): int[]
    public getComponents(arg0: java.lang.Object, arg1: int[], arg2: int): int[]
    public getUnnormalizedComponents(arg0: float[], arg1: int, arg2: int[], arg3: int): int[]
    public getNormalizedComponents(arg0: int[], arg1: int, arg2: float[], arg3: int): float[]
    public getDataElement(arg0: int[], arg1: int): int
    public getDataElements(arg0: int[], arg1: int, arg2: java.lang.Object): java.lang.Object
    public getDataElement(arg0: float[], arg1: int): int
    public getDataElements(arg0: float[], arg1: int, arg2: java.lang.Object): java.lang.Object
    public getNormalizedComponents(arg0: java.lang.Object, arg1: float[], arg2: int): float[]
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public getColorSpace(): java.awt.color.ColorSpace
    public coerceData(arg0: java.awt.image.WritableRaster, arg1: boolean): java.awt.image.ColorModel
    public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
    public createCompatibleWritableRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
    public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
    public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
    public finalize(): void
    public getAlphaRaster(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}