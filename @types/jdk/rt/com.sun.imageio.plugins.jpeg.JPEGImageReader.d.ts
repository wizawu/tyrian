declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace jpeg {
                    class JPEGImageReader extends javax.imageio.ImageReader {
                        protected static WARNING_NO_EOI: int
                        protected static WARNING_NO_JFIF_IN_THUMB: int
                        protected static WARNING_IGNORE_INVALID_ICC: int
                        public constructor(arg0: javax.imageio.spi.ImageReaderSpi)
                        protected warningOccurred(arg0: int): void
                        protected warningWithMessage(arg0: java.lang.String | string): void
                        public setInput(arg0: java.lang.Object, arg1: boolean, arg2: boolean): void
                        public getNumImages(arg0: boolean): int
                        public getWidth(arg0: int): int
                        public getHeight(arg0: int): int
                        public getRawImageType(arg0: int): javax.imageio.ImageTypeSpecifier
                        public getImageTypes(arg0: int): java.util.Iterator
                        public getDefaultReadParam(): javax.imageio.ImageReadParam
                        public getStreamMetadata(): javax.imageio.metadata.IIOMetadata
                        public getImageMetadata(arg0: int): javax.imageio.metadata.IIOMetadata
                        public read(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.BufferedImage
                        public abort(): void
                        public canReadRaster(): boolean
                        public readRaster(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.Raster
                        public readerSupportsThumbnails(): boolean
                        public getNumThumbnails(arg0: int): int
                        public getThumbnailWidth(arg0: int, arg1: int): int
                        public getThumbnailHeight(arg0: int, arg1: int): int
                        public readThumbnail(arg0: int, arg1: int): java.awt.image.BufferedImage
                        public reset(): void
                        public dispose(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}