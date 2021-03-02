declare namespace java {
  namespace awt {
    namespace image {

      abstract class RGBImageFilter extends java.awt.image.ImageFilter {
        protected origmodel: java.awt.image.ColorModel
        protected newmodel: java.awt.image.ColorModel
        protected canFilterIndexColorModel: boolean
        public constructor()
        public setColorModel(arg0: java.awt.image.ColorModel): void
        public substituteColorModel(arg0: java.awt.image.ColorModel, arg1: java.awt.image.ColorModel): void
        public filterIndexColorModel(arg0: java.awt.image.IndexColorModel): java.awt.image.IndexColorModel
        public filterRGBPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: int, arg6: int): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
        public abstract filterRGB(arg0: int, arg1: int, arg2: int): int
      }

    }
  }
}
