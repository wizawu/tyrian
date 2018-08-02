declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace gif {
class GIFImageMetadata extends com.sun.imageio.plugins.gif.GIFMetadata {
    public imageLeftPosition: int
    public imageTopPosition: int
    public imageWidth: int
    public imageHeight: int
    public interlaceFlag: boolean
    public sortFlag: boolean
    public localColorTable: byte[]
    public disposalMethod: int
    public userInputFlag: boolean
    public transparentColorFlag: boolean
    public delayTime: int
    public transparentColorIndex: int
    public hasPlainTextExtension: boolean
    public textGridLeft: int
    public textGridTop: int
    public textGridWidth: int
    public textGridHeight: int
    public characterCellWidth: int
    public characterCellHeight: int
    public textForegroundColor: int
    public textBackgroundColor: int
    public text: byte[]
    public applicationIDs: java.util.List
    public authenticationCodes: java.util.List
    public applicationData: java.util.List
    public comments: java.util.List
    protected constructor(arg0: boolean, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String[])
    public constructor()
    public isReadOnly(): boolean
    public getAsTree(arg0: java.lang.String | string): org.w3c.dom.Node
    public getStandardChromaNode(): javax.imageio.metadata.IIOMetadataNode
    public getStandardCompressionNode(): javax.imageio.metadata.IIOMetadataNode
    public getStandardDataNode(): javax.imageio.metadata.IIOMetadataNode
    public getStandardDimensionNode(): javax.imageio.metadata.IIOMetadataNode
    public getStandardTextNode(): javax.imageio.metadata.IIOMetadataNode
    public getStandardTransparencyNode(): javax.imageio.metadata.IIOMetadataNode
    public setFromTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
    protected mergeNativeTree(arg0: org.w3c.dom.Node): void
    protected mergeStandardTree(arg0: org.w3c.dom.Node): void
    public reset(): void
    public mergeTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}