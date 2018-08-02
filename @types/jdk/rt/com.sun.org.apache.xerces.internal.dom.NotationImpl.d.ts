declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class NotationImpl extends com.sun.org.apache.xerces.internal.dom.NodeImpl implements org.w3c.dom.Notation {
    protected name: string
    protected publicId: string
    protected systemId: string
    protected baseURI: string
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
    public getNodeType(): short
    public getNodeName(): string
    public getPublicId(): string
    public getSystemId(): string
    public setPublicId(arg0: java.lang.String | string): void
    public setSystemId(arg0: java.lang.String | string): void
    public getBaseURI(): string
    public setBaseURI(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}