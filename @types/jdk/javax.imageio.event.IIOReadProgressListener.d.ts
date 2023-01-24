declare namespace javax {
  namespace imageio {
    namespace event {
      interface IIOReadProgressListener extends java.util.EventListener {
        sequenceStarted(arg0: javax.imageio.ImageReader, arg1: number | java.lang.Integer): void
        sequenceComplete(arg0: javax.imageio.ImageReader): void
        imageStarted(arg0: javax.imageio.ImageReader, arg1: number | java.lang.Integer): void
        imageProgress(arg0: javax.imageio.ImageReader, arg1: number | java.lang.Float): void
        imageComplete(arg0: javax.imageio.ImageReader): void
        thumbnailStarted(
          arg0: javax.imageio.ImageReader,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        thumbnailProgress(arg0: javax.imageio.ImageReader, arg1: number | java.lang.Float): void
        thumbnailComplete(arg0: javax.imageio.ImageReader): void
        readAborted(arg0: javax.imageio.ImageReader): void
      }
    }
  }
}
