declare namespace java {
  namespace awt {
    namespace image {

      class CropImageFilter extends java.awt.image.ImageFilter {
        cropX: int
        cropY: int
        cropW: int
        cropH: int
        public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
        public setProperties(arg0: java.util.Hashtable<unknown,unknown>): void
        public setDimensions(arg0: int, arg1: int): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
      }

    }
  }
}
