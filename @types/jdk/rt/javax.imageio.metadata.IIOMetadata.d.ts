declare namespace javax {
    namespace imageio {
        namespace metadata {
            abstract class IIOMetadata {
                protected standardFormatSupported: boolean
                protected nativeMetadataFormatName: string
                protected nativeMetadataFormatClassName: string
                protected extraMetadataFormatNames: java.lang.String[]
                protected extraMetadataFormatClassNames: java.lang.String[]
                protected defaultController: javax.imageio.metadata.IIOMetadataController
                protected controller: javax.imageio.metadata.IIOMetadataController
                protected constructor()
                protected constructor(arg0: boolean, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String[])
                public isStandardMetadataFormatSupported(): boolean
                public isReadOnly(): boolean
                public getNativeMetadataFormatName(): string
                public getExtraMetadataFormatNames(): java.lang.String[]
                public getMetadataFormatNames(): java.lang.String[]
                public getMetadataFormat(arg0: java.lang.String | string): javax.imageio.metadata.IIOMetadataFormat
                public getAsTree(arg0: java.lang.String | string): org.w3c.dom.Node
                public mergeTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
                protected getStandardChromaNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardCompressionNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardDataNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardDimensionNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardDocumentNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardTextNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardTileNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardTransparencyNode(): javax.imageio.metadata.IIOMetadataNode
                protected getStandardTree(): javax.imageio.metadata.IIOMetadataNode
                public setFromTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
                public reset(): void
                public setController(arg0: javax.imageio.metadata.IIOMetadataController | javax.imageio.metadata.IIOMetadataController$$Lambda): void
                public getController(): javax.imageio.metadata.IIOMetadataController
                public getDefaultController(): javax.imageio.metadata.IIOMetadataController
                public hasController(): boolean
                public activateController(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}