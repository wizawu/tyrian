declare namespace java {
    namespace awt {
        namespace image {
class IndexColorModel extends java.awt.image.ColorModel {
    public constructor(arg0: int, arg1: int, arg2: byte[], arg3: byte[], arg4: byte[])
    public constructor(arg0: int, arg1: int, arg2: byte[], arg3: byte[], arg4: byte[], arg5: int)
    public constructor(arg0: int, arg1: int, arg2: byte[], arg3: byte[], arg4: byte[], arg5: byte[])
    public constructor(arg0: int, arg1: int, arg2: byte[], arg3: int, arg4: boolean)
    public constructor(arg0: int, arg1: int, arg2: byte[], arg3: int, arg4: boolean, arg5: int)
    public constructor(arg0: int, arg1: int, arg2: int[], arg3: int, arg4: boolean, arg5: int, arg6: int)
    public constructor(arg0: int, arg1: int, arg2: int[], arg3: int, arg4: int, arg5: java.math.BigInteger)
    public getTransparency(): int
    public getComponentSize(): int[]
    public getMapSize(): int
    public getTransparentPixel(): int
    public getReds(arg0: byte[]): void
    public getGreens(arg0: byte[]): void
    public getBlues(arg0: byte[]): void
    public getAlphas(arg0: byte[]): void
    public getRGBs(arg0: int[]): void
    public getRed(arg0: int): int
    public getGreen(arg0: int): int
    public getBlue(arg0: int): int
    public getAlpha(arg0: int): int
    public getRGB(arg0: int): int
    public getDataElements(arg0: int, arg1: java.lang.Object): java.lang.Object
    public getComponents(arg0: int, arg1: int[], arg2: int): int[]
    public getComponents(arg0: java.lang.Object, arg1: int[], arg2: int): int[]
    public getDataElement(arg0: int[], arg1: int): int
    public getDataElements(arg0: int[], arg1: int, arg2: java.lang.Object): java.lang.Object
    public createCompatibleWritableRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
    public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
    public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
    public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
    public convertToIntDiscrete(arg0: java.awt.image.Raster, arg1: boolean): java.awt.image.BufferedImage
    public isValid(arg0: int): boolean
    public isValid(): boolean
    public getValidPixels(): java.math.BigInteger
    public finalize(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}