declare namespace java {
  namespace awt {
    namespace image {

      class MultiPixelPackedSampleModel extends java.awt.image.SampleModel {
        pixelBitStride: int
        bitMask: int
        pixelsPerDataElement: int
        dataElementSize: int
        dataBitOffset: int
        scanlineStride: int
        public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
        public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
        public createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
        public createDataBuffer(): java.awt.image.DataBuffer
        public getNumDataElements(): int
        public getSampleSize(): int[]
        public getSampleSize(arg0: int): int
        public getOffset(arg0: int, arg1: int): int
        public getBitOffset(arg0: int): int
        public getScanlineStride(): int
        public getPixelBitStride(): int
        public getDataBitOffset(): int
        public getTransferType(): int
        public createSubsetSampleModel(arg0: int[]): java.awt.image.SampleModel
        public getSample(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): int
        public setSample(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.DataBuffer): void
        public getDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): java.lang.Object
        public getPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): int[]
        public setDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): void
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
      }

    }
  }
}
