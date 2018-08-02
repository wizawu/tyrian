declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace jpeg {
class JPEGMetadata extends javax.imageio.metadata.IIOMetadata implements java.lang.Cloneable {
    protected clone(): java.lang.Object
    public getAsTree(arg0: java.lang.String | string): org.w3c.dom.Node
    protected getStandardChromaNode(): javax.imageio.metadata.IIOMetadataNode
    protected getStandardCompressionNode(): javax.imageio.metadata.IIOMetadataNode
    protected getStandardDimensionNode(): javax.imageio.metadata.IIOMetadataNode
    protected getStandardTextNode(): javax.imageio.metadata.IIOMetadataNode
    protected getStandardTransparencyNode(): javax.imageio.metadata.IIOMetadataNode
    public isReadOnly(): boolean
    public mergeTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
    public setFromTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
    public reset(): void
    public print(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}