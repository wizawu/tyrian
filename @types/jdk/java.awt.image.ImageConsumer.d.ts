declare namespace java {
  namespace awt {
    namespace image {
      interface ImageConsumer {
        readonly RANDOMPIXELORDER: int
        readonly TOPDOWNLEFTRIGHT: int
        readonly COMPLETESCANLINES: int
        readonly SINGLEPASS: int
        readonly SINGLEFRAME: int
        readonly IMAGEERROR: int
        readonly SINGLEFRAMEDONE: int
        readonly STATICIMAGEDONE: int
        readonly IMAGEABORTED: int
        setDimensions(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        setProperties(arg0: java.util.Hashtable<unknown, unknown>): void
        setColorModel(arg0: java.awt.image.ColorModel): void
        setHints(arg0: number | java.lang.Integer): void
        setPixels(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.awt.image.ColorModel,
          arg5: number[] | java.lang.Byte[],
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer
        ): void
        setPixels(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: java.awt.image.ColorModel,
          arg5: number[] | java.lang.Integer[],
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer
        ): void
        imageComplete(arg0: number | java.lang.Integer): void
      }
    }
  }
}
