declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class EntityReferenceImpl extends com.sun.org.apache.xerces.internal.dom.ParentNode implements org.w3c.dom.EntityReference {
    protected name: string
    protected baseURI: string
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
    public getNodeType(): short
    public getNodeName(): string
    public cloneNode(arg0: boolean): org.w3c.dom.Node
    public getBaseURI(): string
    public setBaseURI(arg0: java.lang.String | string): void
    protected getEntityRefValue(): string
    protected synchronizeChildren(): void
    public setReadOnly(arg0: boolean, arg1: boolean): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}