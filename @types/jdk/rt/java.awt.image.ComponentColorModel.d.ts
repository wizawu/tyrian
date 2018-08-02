declare namespace java {
    namespace awt {
        namespace image {
class ComponentColorModel extends java.awt.image.ColorModel {
    public constructor(arg0: java.awt.color.ColorSpace, arg1: int[], arg2: boolean, arg3: boolean, arg4: int, arg5: int)
    public constructor(arg0: java.awt.color.ColorSpace, arg1: boolean, arg2: boolean, arg3: int, arg4: int)
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
    public coerceData(arg0: java.awt.image.WritableRaster, arg1: boolean): java.awt.image.ColorModel
    public isCompatibleRaster(arg0: java.awt.image.Raster): boolean
    public createCompatibleWritableRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
    public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
    public isCompatibleSampleModel(arg0: java.awt.image.SampleModel): boolean
    public getAlphaRaster(arg0: java.awt.image.WritableRaster): java.awt.image.WritableRaster
    public equals(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}