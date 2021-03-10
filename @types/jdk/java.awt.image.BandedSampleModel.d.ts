declare namespace java {
  namespace awt {
    namespace image {

      class BandedSampleModel extends java.awt.image.ComponentSampleModel {
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: number[] | java.lang.Integer[])
        public createCompatibleSampleModel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.SampleModel
        public createSubsetSampleModel(arg0: number[] | java.lang.Integer[]): java.awt.image.SampleModel
        public createDataBuffer(): java.awt.image.DataBuffer
        public getDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): java.lang.Object
        public getPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: java.awt.image.DataBuffer): number[]
        public getPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: java.awt.image.DataBuffer): number[]
        public getSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public getSampleFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public getSampleDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public getSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Integer[], arg6: java.awt.image.DataBuffer): number[]
        public setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: java.awt.image.DataBuffer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: java.awt.image.DataBuffer): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.DataBuffer): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Float, arg4: java.awt.image.DataBuffer): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Double, arg4: java.awt.image.DataBuffer): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Integer[], arg6: java.awt.image.DataBuffer): void
        public hashCode(): number
      }

    }
  }
}
