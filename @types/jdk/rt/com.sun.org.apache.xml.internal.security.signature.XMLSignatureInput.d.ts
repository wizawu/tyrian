declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace signature {
class XMLSignatureInput {
    public constructor(arg0: byte[])
    public constructor(arg0: java.io.InputStream)
    public constructor(arg0: org.w3c.dom.Node)
    public constructor(arg0: java.util.Set<org.w3c.dom.Node>)
    public isNeedsToBeExpanded(): boolean
    public setNeedsToBeExpanded(arg0: boolean): void
    public getNodeSet(): java.util.Set<org.w3c.dom.Node>
    public getInputNodeSet(): java.util.Set<org.w3c.dom.Node>
    public getNodeSet(arg0: boolean): java.util.Set<org.w3c.dom.Node>
    public getOctetStream(): java.io.InputStream
    public getOctetStreamReal(): java.io.InputStream
    public getBytes(): byte[]
    public isNodeSet(): boolean
    public isElement(): boolean
    public isOctetStream(): boolean
    public isOutputStreamSet(): boolean
    public isByteArray(): boolean
    public isInitialized(): boolean
    public getMIMEType(): string
    public setMIMEType(arg0: java.lang.String | string): void
    public getSourceURI(): string
    public setSourceURI(arg0: java.lang.String | string): void
    public toString(): string
    public getHTMLRepresentation(): string
    public getHTMLRepresentation(arg0: java.util.Set<java.lang.String>): string
    public getExcludeNode(): org.w3c.dom.Node
    public setExcludeNode(arg0: org.w3c.dom.Node): void
    public getSubNode(): org.w3c.dom.Node
    public isExcludeComments(): boolean
    public setExcludeComments(arg0: boolean): void
    public updateOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public updateOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: boolean): void
    public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public addNodeFilter(arg0: com.sun.org.apache.xml.internal.security.signature.NodeFilter): void
    public getNodeFilters(): java.util.List<com.sun.org.apache.xml.internal.security.signature.NodeFilter>
    public setNodeSet(arg0: boolean): void
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}