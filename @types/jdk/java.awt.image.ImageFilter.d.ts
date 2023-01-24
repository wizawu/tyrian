declare namespace java {
  namespace awt {
    namespace image {
      class ImageFilter implements java.awt.image.ImageConsumer, java.lang.Cloneable {
        protected consumer: java.awt.image.ImageConsumer
        public constructor()
        public getFilterInstance(arg0: java.awt.image.ImageConsumer): java.awt.image.ImageFilter
        public setDimensions(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setProperties(arg0: java.util.Hashtable<unknown, unknown>): void
        public setColorModel(arg0: java.awt.image.ColorModel): void
        public setHints(arg0: number | java.lang.Integer): void
        public setPixels(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.awt.image.ColorModel,
          arg5: number[] | java.lang.Byte[],
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer
        ): void
        public setPixels(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.awt.image.ColorModel,
          arg5: number[] | java.lang.Integer[],
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer
        ): void
        public imageComplete(arg0: number | java.lang.Integer): void
        public resendTopDownLeftRight(arg0: java.awt.image.ImageProducer): void
        public clone(): java.lang.Object
      }
    }
  }
}
