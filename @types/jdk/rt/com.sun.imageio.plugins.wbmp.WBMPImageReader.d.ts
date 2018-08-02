declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace wbmp {
class WBMPImageReader extends javax.imageio.ImageReader {
    public constructor(arg0: javax.imageio.spi.ImageReaderSpi)
    public setInput(arg0: java.lang.Object, arg1: boolean, arg2: boolean): void
    public getNumImages(arg0: boolean): int
    public getWidth(arg0: int): int
    public getHeight(arg0: int): int
    public isRandomAccessEasy(arg0: int): boolean
    public readHeader(): void
    public getImageTypes(arg0: int): java.util.Iterator
    public getDefaultReadParam(): javax.imageio.ImageReadParam
    public getImageMetadata(arg0: int): javax.imageio.metadata.IIOMetadata
    public getStreamMetadata(): javax.imageio.metadata.IIOMetadata
    public read(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.BufferedImage
    public canReadRaster(): boolean
    public readRaster(arg0: int, arg1: javax.imageio.ImageReadParam): java.awt.image.Raster
    public reset(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}