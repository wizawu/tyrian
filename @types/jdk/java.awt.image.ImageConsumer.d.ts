declare namespace java {
  namespace awt {
    namespace image {

      interface ImageConsumer {
        public static readonly RANDOMPIXELORDER: int
        public static readonly TOPDOWNLEFTRIGHT: int
        public static readonly COMPLETESCANLINES: int
        public static readonly SINGLEPASS: int
        public static readonly SINGLEFRAME: int
        public static readonly IMAGEERROR: int
        public static readonly SINGLEFRAMEDONE: int
        public static readonly STATICIMAGEDONE: int
        public static readonly IMAGEABORTED: int
        setDimensions(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        setProperties(arg0: java.util.Hashtable<unknown,unknown>): void
        setColorModel(arg0: java.awt.image.ColorModel): void
        setHints(arg0: number | java.lang.Integer): void
        setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Byte[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Integer[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        imageComplete(arg0: number | java.lang.Integer): void
      }

    }
  }
}
