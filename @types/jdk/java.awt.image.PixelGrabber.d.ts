declare namespace java {
  namespace awt {
    namespace image {

      class PixelGrabber implements java.awt.image.ImageConsumer {
        producer: java.awt.image.ImageProducer
        dstX: int
        dstY: int
        dstW: int
        dstH: int
        imageModel: java.awt.image.ColorModel
        bytePixels: byte[]
        intPixels: int[]
        dstOff: int
        dstScan: int
        public constructor(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: int[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer)
        public constructor(arg0: java.awt.image.ImageProducer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: int[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer)
        public constructor(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: boolean | java.lang.Boolean)
        public startGrabbing(): void
        public abortGrabbing(): void
        public grabPixels(): boolean
        public grabPixels(arg0: number | java.lang.Long): boolean
        public getStatus(): number
        public getWidth(): number
        public getHeight(): number
        public getPixels(): java.lang.Object
        public getColorModel(): java.awt.image.ColorModel
        public setDimensions(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setHints(arg0: number | java.lang.Integer): void
        public setProperties(arg0: java.util.Hashtable<unknown,unknown>): void
        public setColorModel(arg0: java.awt.image.ColorModel): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: int[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        public imageComplete(arg0: number | java.lang.Integer): void
        public status(): number
      }

    }
  }
}
