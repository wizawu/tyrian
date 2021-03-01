declare namespace java {
  namespace awt {
    namespace image {

      class WritableRaster extends java.awt.image.Raster {

        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.Point)
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point)
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Rectangle, arg3: java.awt.Point, arg4: java.awt.image.WritableRaster)
        public getWritableParent(): java.awt.image.WritableRaster
        public createWritableTranslatedChild(arg0: int, arg1: int): java.awt.image.WritableRaster
        public createWritableChild(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int[]): java.awt.image.WritableRaster
        public setDataElements(arg0: int, arg1: int, arg2: java.lang.Object): void
        public setDataElements(arg0: int, arg1: int, arg2: java.awt.image.Raster): void
        public setDataElements(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.lang.Object): void
        public setRect(arg0: java.awt.image.Raster): void
        public setRect(arg0: int, arg1: int, arg2: java.awt.image.Raster): void
        public setPixel(arg0: int, arg1: int, arg2: int[]): void
        public setPixel(arg0: int, arg1: int, arg2: float[]): void
        public setPixel(arg0: int, arg1: int, arg2: double[]): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[]): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: float[]): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: double[]): void
        public setSample(arg0: int, arg1: int, arg2: int, arg3: int): void
        public setSample(arg0: int, arg1: int, arg2: int, arg3: float): void
        public setSample(arg0: int, arg1: int, arg2: int, arg3: double): void
        public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[]): void
        public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: float[]): void
        public setSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: double[]): void
      }

    }
  }
}
