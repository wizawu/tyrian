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
        public filterRGBPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[], arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Byte[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Integer[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        public abstract filterRGB(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      }

    }
  }
}
