declare namespace java {
    namespace awt {
        namespace image {
class ComponentSampleModel extends java.awt.image.SampleModel {
    protected bandOffsets: int[]
    protected bankIndices: int[]
    protected numBands: int
    protected numBanks: int
    protected scanlineStride: int
    protected pixelStride: int
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[])
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: int[])
    public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
    public createSubsetSampleModel(arg0: int[]): java.awt.image.SampleModel
    public createDataBuffer(): java.awt.image.DataBuffer
    public getOffset(arg0: int, arg1: int): int
    public getOffset(arg0: int, arg1: int, arg2: int): int
    public getSampleSize(): int[]
    public getSampleSize(arg0: int): int
    public getBankIndices(): int[]
    public getBandOffsets(): int[]
    public getScanlineStride(): int
    public getPixelStride(): int
    public getNumDataElements(): int
    public getDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): java.lang.Object
    public getPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): int[]
    public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: java.awt.image.DataBuffer): int[]
    public getSample(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): int
    public getSampleFloat(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): float
    public getSampleDouble(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): double
    public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.image.DataBuffer): int[]
    public setDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): void
    public setPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: java.awt.image.DataBuffer): void
    public setSample(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.DataBuffer): void
    public setSample(arg0: int, arg1: int, arg2: int, arg3: float, arg4: java.awt.image.DataBuffer): void
    public setSample(arg0: int, arg1: int, arg2: int, arg3: double, arg4: java.awt.image.DataBuffer): void
    public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.image.DataBuffer): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}