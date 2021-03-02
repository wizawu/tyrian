declare namespace java {
  namespace awt {
    namespace image {

      class Raster {
        protected sampleModel: java.awt.image.SampleModel
        protected dataBuffer: java.awt.image.DataBuffer
        protected minX: int
        protected minY: int
        protected width: int
        protected height: int
        protected sampleModelTranslateX: int
        protected sampleModelTranslateY: int
        protected numBands: int
        protected numDataElements: int
        protected parent: java.awt.image.Raster
        public static createInterleavedRaster(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Point): java.awt.image.WritableRaster
        public static createInterleavedRaster(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.Point): java.awt.image.WritableRaster
        public static createBandedRaster(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Point): java.awt.image.WritableRaster
        public static createBandedRaster(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: int[], arg6: java.awt.Point): java.awt.image.WritableRaster
        public static createPackedRaster(arg0: int, arg1: int, arg2: int, arg3: int[], arg4: java.awt.Point): java.awt.image.WritableRaster
        public static createPackedRaster(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: java.awt.Point): java.awt.image.WritableRaster
        public static createInterleavedRaster(arg0: java.awt.image.DataBuffer, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[], arg6: java.awt.Point): java.awt.image.WritableRaster
        public static createBandedRaster(arg0: java.awt.image.DataBuffer, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: int[], arg6: java.awt.Point): java.awt.image.WritableRaster
        public static createPackedRaster(arg0: java.awt.image.DataBuffer, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: java.awt.Point): java.awt.image.WritableRaster
        public static createPackedRaster(arg0: java.awt.image.DataBuffer, arg1: int, arg2: int, arg3: int, arg4: java.awt.Point): java.awt.image.WritableRaster
        public static createRaster(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point): java.awt.image.Raster
        public static createWritableRaster(arg0: java.awt.image.SampleModel, arg1: java.awt.Point): java.awt.image.WritableRaster
        public static createWritableRaster(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point): java.awt.image.WritableRaster
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.Point)
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point)
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Rectangle, arg3: java.awt.Point, arg4: java.awt.image.Raster)
        public getParent(): java.awt.image.Raster
        public getSampleModelTranslateX(): int
        public getSampleModelTranslateY(): int
        public createCompatibleWritableRaster(): java.awt.image.WritableRaster
        public createCompatibleWritableRaster(arg0: int, arg1: int): java.awt.image.WritableRaster
        public createCompatibleWritableRaster(arg0: java.awt.Rectangle): java.awt.image.WritableRaster
        public createCompatibleWritableRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.WritableRaster
        public createTranslatedChild(arg0: int, arg1: int): java.awt.image.Raster
        public createChild(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int[]): java.awt.image.Raster
        public getBounds(): java.awt.Rectangle
        public getMinX(): int
        public getMinY(): int
        public getWidth(): int
        public getHeight(): int
        public getNumBands(): int
        public getNumDataElements(): int
        public getTransferType(): int
        public getDataBuffer(): java.awt.image.DataBuffer
        public getSampleModel(): java.awt.image.SampleModel
        public getDataElements(arg0: int, arg1: int, arg2: java.lang.Object): java.lang.Object
        public getDataElements(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.lang.Object): java.lang.Object
        public getPixel(arg0: int, arg1: int, arg2: int[]): int[]
        public getPixel(arg0: int, arg1: int, arg2: float[]): float[]
        public getPixel(arg0: int, arg1: int, arg2: double[]): double[]
        public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[]): int[]
        public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: float[]): float[]
        public getPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: double[]): double[]
        public getSample(arg0: int, arg1: int, arg2: int): int
        public getSampleFloat(arg0: int, arg1: int, arg2: int): float
        public getSampleDouble(arg0: int, arg1: int, arg2: int): double
        public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int[]): int[]
        public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: float[]): float[]
        public getSamples(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: double[]): double[]
      }

    }
  }
}
