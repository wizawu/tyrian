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
        public setDimensions(arg0: int, arg1: int): void
        public setColorModel(arg0: java.awt.image.ColorModel): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: byte[], arg6: int, arg7: int): void
        public setPixels(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.image.ColorModel, arg5: int[], arg6: int, arg7: int): void
        public imageComplete(arg0: int): void
      }

    }
  }
}
