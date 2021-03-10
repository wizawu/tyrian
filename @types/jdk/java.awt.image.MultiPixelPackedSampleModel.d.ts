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
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer)
        public createCompatibleSampleModel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.SampleModel
        public createDataBuffer(): java.awt.image.DataBuffer
        public getNumDataElements(): number
        public getSampleSize(): number[]
        public getSampleSize(arg0: number | java.lang.Integer): number
        public getOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public getBitOffset(arg0: number | java.lang.Integer): number
        public getScanlineStride(): number
        public getPixelBitStride(): number
        public getDataBitOffset(): number
        public getTransferType(): number
        public createSubsetSampleModel(arg0: number[] | java.lang.Integer[]): java.awt.image.SampleModel
        public getSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.DataBuffer): void
        public getDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): java.lang.Object
        public getPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: java.awt.image.DataBuffer): number[]
        public setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: java.awt.image.DataBuffer): void
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}
