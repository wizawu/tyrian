declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace png {
class PNGImageReader extends javax.imageio.ImageReader {
    public constructor(arg0: javax.imageio.spi.ImageReaderSpi)
    public setInput(arg0: java.lang.Object, arg1: boolean, arg2: boolean): void
    public getNumImages(arg0: boolean): int
    public getWidth(arg0: int): int
    public getHeight(arg0: int): int
    public getImageTypes(arg0: int): java.util.Iterator<javax.imageio.ImageTypeSpecifier>
    public getRawImageType(arg0: int): javax.imageio.ImageTypeSpecifier
    public getDefaultReadParam(): javax.imageio.ImageReadParam
    public getStreamMetadata(): javax.imageio.metadata.IIOMetadata
    public getImageMetadata(arg0: int): javax.imageio.metadata.IIOMetadata
    public read(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.BufferedImage
    public reset(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}