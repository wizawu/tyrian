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
        public static createInterleavedRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createInterleavedRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number[] | java.lang.Integer[],
          arg6: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createBandedRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createBandedRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number[] | java.lang.Integer[],
          arg5: number[] | java.lang.Integer[],
          arg6: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createPackedRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number[] | java.lang.Integer[],
          arg4: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createPackedRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createInterleavedRaster(
          arg0: java.awt.image.DataBuffer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number[] | java.lang.Integer[],
          arg6: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createBandedRaster(
          arg0: java.awt.image.DataBuffer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number[] | java.lang.Integer[],
          arg5: number[] | java.lang.Integer[],
          arg6: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createPackedRaster(
          arg0: java.awt.image.DataBuffer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number[] | java.lang.Integer[],
          arg5: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createPackedRaster(
          arg0: java.awt.image.DataBuffer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createRaster(
          arg0: java.awt.image.SampleModel,
          arg1: java.awt.image.DataBuffer,
          arg2: java.awt.Point
        ): java.awt.image.Raster
        public static createWritableRaster(
          arg0: java.awt.image.SampleModel,
          arg1: java.awt.Point
        ): java.awt.image.WritableRaster
        public static createWritableRaster(
          arg0: java.awt.image.SampleModel,
          arg1: java.awt.image.DataBuffer,
          arg2: java.awt.Point
        ): java.awt.image.WritableRaster
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.Point)
        protected constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point)
        protected constructor(
          arg0: java.awt.image.SampleModel,
          arg1: java.awt.image.DataBuffer,
          arg2: java.awt.Rectangle,
          arg3: java.awt.Point,
          arg4: java.awt.image.Raster
        )
        public getParent(): java.awt.image.Raster
        public getSampleModelTranslateX(): number
        public getSampleModelTranslateY(): number
        public createCompatibleWritableRaster(): java.awt.image.WritableRaster
        public createCompatibleWritableRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.awt.image.WritableRaster
        public createCompatibleWritableRaster(arg0: java.awt.Rectangle): java.awt.image.WritableRaster
        public createCompatibleWritableRaster(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): java.awt.image.WritableRaster
        public createTranslatedChild(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.awt.image.Raster
        public createChild(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number[] | java.lang.Integer[]
        ): java.awt.image.Raster
        public getBounds(): java.awt.Rectangle
        public getMinX(): number
        public getMinY(): number
        public getWidth(): number
        public getHeight(): number
        public getNumBands(): number
        public getNumDataElements(): number
        public getTransferType(): number
        public getDataBuffer(): java.awt.image.DataBuffer
        public getSampleModel(): java.awt.image.SampleModel
        public getDataElements(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.lang.Object | any
        ): java.lang.Object
        public getDataElements(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.lang.Object | any
        ): java.lang.Object
        public getPixel(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[]
        ): number[]
        public getPixel(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Float[]
        ): number[]
        public getPixel(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Double[]
        ): number[]
        public getPixels(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number[] | java.lang.Integer[]
        ): number[]
        public getPixels(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number[] | java.lang.Float[]
        ): number[]
        public getPixels(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number[] | java.lang.Double[]
        ): number[]
        public getSample(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public getSampleFloat(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public getSampleDouble(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public getSamples(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number[] | java.lang.Integer[]
        ): number[]
        public getSamples(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number[] | java.lang.Float[]
        ): number[]
        public getSamples(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number[] | java.lang.Double[]
        ): number[]
      }
    }
  }
}
