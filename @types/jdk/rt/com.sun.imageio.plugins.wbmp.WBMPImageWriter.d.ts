declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace wbmp {
class WBMPImageWriter extends javax.imageio.ImageWriter {
    public constructor(arg0: javax.imageio.spi.ImageWriterSpi)
    public setOutput(arg0: java.lang.Object): void
    public getDefaultStreamMetadata(arg0: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public getDefaultImageMetadata(arg0: javax.imageio.ImageTypeSpecifier, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public convertStreamMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public convertImageMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageTypeSpecifier, arg2: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public canWriteRasters(): boolean
    public write(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.IIOImage, arg2: javax.imageio.ImageWriteParam): void
    public reset(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}