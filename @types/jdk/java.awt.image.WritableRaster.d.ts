declare namespace java {
  namespace awt {
    namespace image {

      class WritableRaster extends java.awt.image.Raster {
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.Point)
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point)
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Rectangle, arg3: java.awt.Point, arg4: java.awt.image.WritableRaster)
        public getWritableParent(): java.awt.image.WritableRaster
        public createWritableTranslatedChild(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.WritableRaster
        public createWritableChild(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: int[]): java.awt.image.WritableRaster
        public setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.Object | any): void
        public setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.image.Raster): void
        public setDataElements(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.lang.Object | any): void
        public setRect(arg0: java.awt.image.Raster): void
        public setRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.image.Raster): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: int[]): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: float[]): void
        public setPixel(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: double[]): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: int[]): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: float[]): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: double[]): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Float): void
        public setSample(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Double): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: int[]): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: float[]): void
        public setSamples(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: double[]): void
      }

    }
  }
}
