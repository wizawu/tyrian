declare namespace java {
  namespace awt {
    namespace image {

      abstract class SampleModel {

        protected width: int
        protected height: int
        protected numBands: int
        protected dataType: int
        public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
        public readonly getWidth(): int
        public readonly getHeight(): int
        public readonly getNumBands(): int
        public abstract getNumDataElements(): int
        public readonly getDataType(): int
        public getTransferType(): int
        public getPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): int[]
        public abstract getDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): java.lang.Object
        public getDataElements(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.lang.Object, arg5: java.awt.image.DataBuffer): java.lang.Object
        public abstract setDataElements(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.awt.image.DataBuffer): void
        public setDataElements(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.lang.Object, arg5: java.awt.image.DataBuffer): void
        public getPixel(arg0: int, arg1: int, arg2: float[], arg3: java.awt.image.DataBuffer): float[]
        public getPixel(arg0: int, arg1: int, arg2: double[], arg3: java.awt.image.DataBuffer): double[]
        public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: java.awt.image.DataBuffer): int[]
        public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: float[], arg5: java.awt.image.DataBuffer): float[]
        public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: double[], arg5: java.awt.image.DataBuffer): double[]
        public abstract getSample(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): int
        public getSampleFloat(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): float
        public getSampleDouble(arg0: int, arg1: int, arg2: int, arg3: java.awt.image.DataBuffer): double
        public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.image.DataBuffer): int[]
        public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: float[], arg6: java.awt.image.DataBuffer): float[]
        public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: double[], arg6: java.awt.image.DataBuffer): double[]
        public setPixel(arg0: int, arg1: int, arg2: int[], arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: int, arg1: int, arg2: float[], arg3: java.awt.image.DataBuffer): void
        public setPixel(arg0: int, arg1: int, arg2: double[], arg3: java.awt.image.DataBuffer): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: java.awt.image.DataBuffer): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: float[], arg5: java.awt.image.DataBuffer): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: double[], arg5: java.awt.image.DataBuffer): void
        public abstract setSample(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.DataBuffer): void
        public setSample(arg0: int, arg1: int, arg2: int, arg3: float, arg4: java.awt.image.DataBuffer): void
        public setSample(arg0: int, arg1: int, arg2: int, arg3: double, arg4: java.awt.image.DataBuffer): void
        public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.image.DataBuffer): void
        public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: float[], arg6: java.awt.image.DataBuffer): void
        public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: double[], arg6: java.awt.image.DataBuffer): void
        public abstract createCompatibleSampleModel(arg0: int, arg1: int): java.awt.image.SampleModel
        public abstract createSubsetSampleModel(arg0: int[]): java.awt.image.SampleModel
        public abstract createDataBuffer(): java.awt.image.DataBuffer
        public abstract getSampleSize(): int[]
        public abstract getSampleSize(arg0: int): int
      }

    }
  }
}
