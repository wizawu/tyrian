declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace bmp {
                    class BMPImageWriter extends javax.imageio.ImageWriter implements com.sun.imageio.plugins.bmp.BMPConstants {
                        public constructor(arg0: javax.imageio.spi.ImageWriterSpi)
                        public setOutput(arg0: java.lang.Object): void
                        public getDefaultWriteParam(): javax.imageio.ImageWriteParam
                        public getDefaultStreamMetadata(arg0: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public getDefaultImageMetadata(arg0: javax.imageio.ImageTypeSpecifier, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public convertStreamMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public convertImageMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageTypeSpecifier, arg2: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public canWriteRasters(): boolean
                        public write(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.IIOImage, arg2: javax.imageio.ImageWriteParam): void
                        public reset(): void
                        protected getPreferredCompressionType(arg0: java.awt.image.ColorModel, arg1: java.awt.image.SampleModel): int
                        protected getPreferredCompressionType(arg0: javax.imageio.ImageTypeSpecifier): int
                        protected canEncodeImage(arg0: int, arg1: java.awt.image.ColorModel, arg2: java.awt.image.SampleModel): boolean
                        protected canEncodeImage(arg0: int, arg1: javax.imageio.ImageTypeSpecifier): boolean
                        protected writeMaskToPalette(arg0: int, arg1: int, arg2: byte[], arg3: byte[], arg4: byte[], arg5: byte[]): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}