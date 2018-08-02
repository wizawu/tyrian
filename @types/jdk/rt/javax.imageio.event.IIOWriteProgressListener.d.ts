declare namespace javax {
    namespace imageio {
        namespace event {
            interface IIOWriteProgressListener extends java.util.EventListener {
                imageStarted(arg0: javax.imageio.ImageWriter, arg1: int): void
                imageProgress(arg0: javax.imageio.ImageWriter, arg1: float): void
                imageComplete(arg0: javax.imageio.ImageWriter): void
                thumbnailStarted(arg0: javax.imageio.ImageWriter, arg1: int, arg2: int): void
                thumbnailProgress(arg0: javax.imageio.ImageWriter, arg1: float): void
                thumbnailComplete(arg0: javax.imageio.ImageWriter): void
                writeAborted(arg0: javax.imageio.ImageWriter): void
            }
        }
    }
}