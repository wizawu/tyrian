declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace gif {
                    class GIFImageWriter extends javax.imageio.ImageWriter {
                        public constructor(arg0: com.sun.imageio.plugins.gif.GIFImageWriterSpi)
                        public canWriteSequence(): boolean
                        public convertStreamMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public convertImageMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageTypeSpecifier, arg2: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public endWriteSequence(): void
                        public getDefaultImageMetadata(arg0: javax.imageio.ImageTypeSpecifier, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public getDefaultStreamMetadata(arg0: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
                        public getDefaultWriteParam(): javax.imageio.ImageWriteParam
                        public prepareWriteSequence(arg0: javax.imageio.metadata.IIOMetadata): void
                        public reset(): void
                        public setOutput(arg0: java.lang.Object): void
                        public write(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.IIOImage, arg2: javax.imageio.ImageWriteParam): void
                        public writeToSequence(arg0: javax.imageio.IIOImage, arg1: javax.imageio.ImageWriteParam): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}