declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace gif {
                    class GIFStreamMetadata extends com.sun.imageio.plugins.gif.GIFMetadata {
                        public version: string
                        public logicalScreenWidth: int
                        public logicalScreenHeight: int
                        public colorResolution: int
                        public pixelAspectRatio: int
                        public backgroundColorIndex: int
                        public sortFlag: boolean
                        public globalColorTable: byte[]
                        protected constructor(arg0: boolean, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String[])
                        public constructor()
                        public isReadOnly(): boolean
                        public getAsTree(arg0: java.lang.String | string): org.w3c.dom.Node
                        public getStandardChromaNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardCompressionNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardDataNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardDimensionNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardDocumentNode(): javax.imageio.metadata.IIOMetadataNode
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