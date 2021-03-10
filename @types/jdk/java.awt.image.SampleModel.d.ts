declare namespace java {
  namespace awt {
    namespace image {

      abstract class SampleModel {
        protected width: int
        protected height: int
        protected numBands: int
        protected dataType: int
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public getWidth(): number
        public getHeight(): number
        public getNumBands(): number
        public abstract getNumDataElements(): number
        public getDataType(): number
        public getTransferType(): number
        public getPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: java.awt.image.DataBuffer): number[]
        public abstract getDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): java.lang.Object
        public getDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.lang.Object | any, arg5: java.awt.image.DataBuffer): java.lang.Object
        public abstract setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: java.awt.image.DataBuffer): void
        public setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.lang.Object | any, arg5: java.awt.image.DataBuffer): void
        public getPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Float[], arg3: java.awt.image.DataBuffer): number[]
        public getPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Double[], arg3: java.awt.image.DataBuffer): number[]
        public getPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: java.awt.image.DataBuffer): number[]
        public getPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Float[], arg5: java.awt.image.DataBuffer): number[]
        public getPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Double[], arg5: java.awt.image.DataBuffer): number[]
        public abstract getSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public getSampleFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public getSampleDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.image.DataBuffer): number
        public getSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Integer[], arg6: java.awt.image.DataBuffer): number[]
        public getSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Float[], arg6: java.awt.image.DataBuffer): number[]
        public getSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Double[], arg6: java.awt.image.DataBuffer): number[]
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[], arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Float[], arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Double[], arg3: java.awt.image.DataBuffer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: java.awt.image.DataBuffer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Float[], arg5: java.awt.image.DataBuffer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Double[], arg5: java.awt.image.DataBuffer): void
        public abstract setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.DataBuffer): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Float, arg4: java.awt.image.DataBuffer): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Double, arg4: java.awt.image.DataBuffer): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Integer[], arg6: java.awt.image.DataBuffer): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Float[], arg6: java.awt.image.DataBuffer): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number[] | java.lang.Double[], arg6: java.awt.image.DataBuffer): void
        public abstract createCompatibleSampleModel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.SampleModel
        public abstract createSubsetSampleModel(arg0: number[] | java.lang.Integer[]): java.awt.image.SampleModel
        public abstract createDataBuffer(): java.awt.image.DataBuffer
        public abstract getSampleSize(): number[]
        public abstract getSampleSize(arg0: number | java.lang.Integer): number
      }

    }
  }
}
