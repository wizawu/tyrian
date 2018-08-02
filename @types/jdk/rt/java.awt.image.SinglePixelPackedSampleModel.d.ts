declare namespace java {
    namespace awt {
        namespace image {
class SinglePixelPackedSampleModel extends java.awt.image.SampleModel {
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int[])
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[])
    public getNumDataElements(): int
    public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
    public createDataBuffer(): java.awt.image.DataBuffer
    public getSampleSize(): int[]
    public getSampleSize(arg0: int): int
    public getOffset(arg0: int, arg1: int): int
    public getBitOffsets(): int[]
    public getBitMasks(): int[]
    public getScanlineStride(): int
    public createSubsetSampleModel(arg0: int[]): java.awt.image.SampleModel
    public getDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): java.lang.Object
    public getPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): int[]
    public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: java.awt.image.DataBuffer): int[]
    public getSample(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): int
    public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.image.DataBuffer): int[]
    public setDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): void
    public setPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): void
    public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: java.awt.image.DataBuffer): void
    public setSample(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.DataBuffer): void
    public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.image.DataBuffer): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}