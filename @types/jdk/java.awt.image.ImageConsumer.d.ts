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
        setDimensions(arg0: int, arg1: int): void
        setProperties(arg0: java.util.Hashtable<unknown,unknown>): void
        setColorModel(arg0: java.awt.image.ColorModel): void
        setHints(arg0: int): void
        setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
        setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
        imageComplete(arg0: int): void
      }

    }
  }
}
