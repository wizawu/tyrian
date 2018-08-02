declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace bmp {
class BMPMetadata extends javax.imageio.metadata.IIOMetadata implements com.sun.imageio.plugins.bmp.BMPConstants {
    public static nativeMetadataFormatName: string
    public bmpVersion: string
    public width: int
    public height: int
    public bitsPerPixel: short
    public compression: int
    public imageSize: int
    public xPixelsPerMeter: int
    public yPixelsPerMeter: int
    public colorsUsed: int
    public colorsImportant: int
    public redMask: int
    public greenMask: int
    public blueMask: int
    public alphaMask: int
    public colorSpace: int
    public redX: double
    public redY: double
    public redZ: double
    public greenX: double
    public greenY: double
    public greenZ: double
    public blueX: double
    public blueY: double
    public blueZ: double
    public gammaRed: int
    public gammaGreen: int
    public gammaBlue: int
    public intent: int
    public palette: byte[]
    public paletteSize: int
    public red: int
    public green: int
    public blue: int
    public comments: java.util.List
    public constructor()
    public isReadOnly(): boolean
    public getAsTree(arg0: java.lang.String | string): org.w3c.dom.Node
    protected getStandardChromaNode(): javax.imageio.metadata.IIOMetadataNode
    protected getStandardCompressionNode(): javax.imageio.metadata.IIOMetadataNode
    protected getStandardDataNode(): javax.imageio.metadata.IIOMetadataNode
    protected getStandardDimensionNode(): javax.imageio.metadata.IIOMetadataNode
    public setFromTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
    public mergeTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
    public reset(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}