declare namespace javax {
  namespace imageio {
    namespace event {

      interface IIOReadProgressListener extends java.util.EventListener {
        sequenceStarted(arg0: javax.imageio.ImageReader, arg1: int): void
        sequenceComplete(arg0: javax.imageio.ImageReader): void
        imageStarted(arg0: javax.imageio.ImageReader, arg1: int): void
        imageProgress(arg0: javax.imageio.ImageReader, arg1: float): void
        imageComplete(arg0: javax.imageio.ImageReader): void
        thumbnailStarted(arg0: javax.imageio.ImageReader, arg1: int, arg2: int): void
        thumbnailProgress(arg0: javax.imageio.ImageReader, arg1: float): void
        thumbnailComplete(arg0: javax.imageio.ImageReader): void
        readAborted(arg0: javax.imageio.ImageReader): void
      }

    }
  }
}
