declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace jpeg {
class JPEGImageWriter extends javax.imageio.ImageWriter {
    protected static WARNING_DEST_IGNORED: int
    protected static WARNING_STREAM_METADATA_IGNORED: int
    protected static WARNING_DEST_METADATA_COMP_MISMATCH: int
    protected static WARNING_DEST_METADATA_JFIF_MISMATCH: int
    protected static WARNING_DEST_METADATA_ADOBE_MISMATCH: int
    protected static WARNING_IMAGE_METADATA_JFIF_MISMATCH: int
    protected static WARNING_IMAGE_METADATA_ADOBE_MISMATCH: int
    protected static WARNING_METADATA_NOT_JPEG_FOR_RASTER: int
    protected static WARNING_NO_BANDS_ON_INDEXED: int
    protected static WARNING_ILLEGAL_THUMBNAIL: int
    protected static WARNING_IGNORING_THUMBS: int
    protected static WARNING_FORCING_JFIF: int
    protected static WARNING_THUMB_CLIPPED: int
    protected static WARNING_METADATA_ADJUSTED_FOR_THUMB: int
    protected static WARNING_NO_RGB_THUMB_AS_INDEXED: int
    protected static WARNING_NO_GRAY_THUMB_AS_INDEXED: int
    public constructor(arg0: javax.imageio.spi.ImageWriterSpi)
    public setOutput(arg0: java.lang.Object): void
    public getDefaultWriteParam(): javax.imageio.ImageWriteParam
    public getDefaultStreamMetadata(arg0: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public getDefaultImageMetadata(arg0: javax.imageio.ImageTypeSpecifier, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public convertStreamMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public convertImageMetadata(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.ImageTypeSpecifier, arg2: javax.imageio.ImageWriteParam): javax.imageio.metadata.IIOMetadata
    public getNumThumbnailsSupported(arg0: javax.imageio.ImageTypeSpecifier, arg1: javax.imageio.ImageWriteParam, arg2: javax.imageio.metadata.IIOMetadata, arg3: javax.imageio.metadata.IIOMetadata): int
    public getPreferredThumbnailSizes(arg0: javax.imageio.ImageTypeSpecifier, arg1: javax.imageio.ImageWriteParam, arg2: javax.imageio.metadata.IIOMetadata, arg3: javax.imageio.metadata.IIOMetadata): java.awt.Dimension[]
    public canWriteRasters(): boolean
    public write(arg0: javax.imageio.metadata.IIOMetadata, arg1: javax.imageio.IIOImage, arg2: javax.imageio.ImageWriteParam): void
    public canWriteSequence(): boolean
    public prepareWriteSequence(arg0: javax.imageio.metadata.IIOMetadata): void
    public writeToSequence(arg0: javax.imageio.IIOImage, arg1: javax.imageio.ImageWriteParam): void
    public endWriteSequence(): void
    public abort(): void
    protected clearAbortRequest(): void
    public reset(): void
    public dispose(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}