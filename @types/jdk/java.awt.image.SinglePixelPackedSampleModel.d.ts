declare namespace java {
  namespace awt {
    namespace image {

      class SinglePixelPackedSampleModel extends java.awt.image.SampleModel {
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: int[])
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: int[])
        public getNumDataElements(): number
        public createCompatibleSampleModel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.SampleModel
        public createDataBuffer(): java.awt.image.DataBuffer
        public getSampleSize(): number[]
        public getSampleSize(arg0: number | java.lang.Integer): number
        public getOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public getBitOffsets(): number[]
        public getBitMasks(): number[]
        public getScanlineStride(): number
        public createSubsetSampleModel(arg0: int[]): java.awt.image.SampleModel
        public getDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): java.lang.Object
        public getPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: int[], arg3: java.awt.image.DataBuffer): number[]
        public getPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: int[], arg5: java.awt.image.DataBuffer): number[]
        public getSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public getSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: int[], arg6: java.awt.image.DataBuffer): number[]
        public setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: int[], arg3: java.awt.image.DataBuffer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: int[], arg5: java.awt.image.DataBuffer): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.DataBuffer): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: int[], arg6: java.awt.image.DataBuffer): void
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}
