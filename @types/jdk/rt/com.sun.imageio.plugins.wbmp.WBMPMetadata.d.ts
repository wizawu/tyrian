declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace wbmp {
                    class WBMPMetadata extends javax.imageio.metadata.IIOMetadata {
                        public wbmpType: int
                        public width: int
                        public height: int
                        public constructor()
                        public isReadOnly(): boolean
                        public getAsTree(arg0: java.lang.String | string): org.w3c.dom.Node
                        public setFromTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
                        public mergeTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
                        public reset(): void
                        protected getStandardChromaNode(): javax.imageio.metadata.IIOMetadataNode
                        protected getStandardDimensionNode(): javax.imageio.metadata.IIOMetadataNode
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}