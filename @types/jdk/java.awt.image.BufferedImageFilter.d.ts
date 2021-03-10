declare namespace java {
  namespace awt {
    namespace image {

      class BufferedImageFilter extends java.awt.image.ImageFilter implements java.lang.Cloneable {
        bufferedImageOp: java.awt.image.BufferedImageOp
        model: java.awt.image.ColorModel
        width: int
        height: int
        bytePixels: byte[]
        intPixels: int[]
        public constructor(arg0: java.awt.image.BufferedImageOp)
        public getBufferedImageOp(): java.awt.image.BufferedImageOp
        public setDimensions(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setColorModel(arg0: java.awt.image.ColorModel): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Byte[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Integer[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        public imageComplete(arg0: number | java.lang.Integer): void
      }

    }
  }
}
