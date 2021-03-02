declare namespace javax {
  namespace imageio {
    namespace event {

      interface IIOReadUpdateListener extends java.util.EventListener {
        passStarted(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: int[]): void
        imageUpdate(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: int[]): void
        passComplete(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage): void
        thumbnailPassStarted(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: int[]): void
        thumbnailUpdate(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: int[]): void
        thumbnailPassComplete(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage): void
      }

    }
  }
}
