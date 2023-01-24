declare namespace javax {
  namespace imageio {
    namespace event {
      interface IIOWriteProgressListener extends java.util.EventListener {
        imageStarted(arg0: javax.imageio.ImageWriter, arg1: number | java.lang.Integer): void
        imageProgress(arg0: javax.imageio.ImageWriter, arg1: number | java.lang.Float): void
        imageComplete(arg0: javax.imageio.ImageWriter): void
        thumbnailStarted(
          arg0: javax.imageio.ImageWriter,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        thumbnailProgress(arg0: javax.imageio.ImageWriter, arg1: number | java.lang.Float): void
        thumbnailComplete(arg0: javax.imageio.ImageWriter): void
        writeAborted(arg0: javax.imageio.ImageWriter): void
      }
    }
  }
}
