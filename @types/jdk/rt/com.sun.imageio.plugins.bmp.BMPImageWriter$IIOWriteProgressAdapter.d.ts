declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace bmp {
                    class BMPImageWriter$IIOWriteProgressAdapter implements javax.imageio.event.IIOWriteProgressListener {
                        public imageComplete(arg0: javax.imageio.ImageWriter): void
                        public imageProgress(arg0: javax.imageio.ImageWriter, arg1: float): void
                        public imageStarted(arg0: javax.imageio.ImageWriter, arg1: int): void
                        public thumbnailComplete(arg0: javax.imageio.ImageWriter): void
                        public thumbnailProgress(arg0: javax.imageio.ImageWriter, arg1: float): void
                        public thumbnailStarted(arg0: javax.imageio.ImageWriter, arg1: int, arg2: int): void
                        public writeAborted(arg0: javax.imageio.ImageWriter): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}