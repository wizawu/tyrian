declare namespace javax {
  namespace imageio {
    namespace event {

      interface IIOReadUpdateListener extends java.util.EventListener {
        passStarted(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int[]): void
        imageUpdate(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int[]): void
        passComplete(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage): void
        thumbnailPassStarted(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int[]): void
        thumbnailUpdate(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int[]): void
        thumbnailPassComplete(arg0: javax.imageio.ImageReader, arg1: java.awt.image.BufferedImage): void
      }

    }
  }
}
