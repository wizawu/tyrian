declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class ElementImpl extends com.sun.org.apache.xerces.internal.dom.ParentNode implements org.w3c.dom.Element , org.w3c.dom.TypeInfo {
    protected name: string
    protected attributes: com.sun.org.apache.xerces.internal.dom.AttributeMap
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
    protected constructor()
    public getNodeType(): short
    public getNodeName(): string
    public getAttributes(): org.w3c.dom.NamedNodeMap
    public cloneNode(arg0: boolean): org.w3c.dom.Node
    public getBaseURI(): string
    public getAttribute(arg0: java.lang.String | string): string
    public getAttributeNode(arg0: java.lang.String | string): org.w3c.dom.Attr
    public getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
    public getTagName(): string
    public normalize(): void
    public removeAttribute(arg0: java.lang.String | string): void
    public removeAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
    public getAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public setAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public removeAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getAttributeNodeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
    public setAttributeNodeNS(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
    protected setXercesAttributeNode(arg0: org.w3c.dom.Attr): int
    protected getXercesAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public hasAttributes(): boolean
    public hasAttribute(arg0: java.lang.String | string): boolean
    public hasAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
    public isEqualNode(arg0: org.w3c.dom.Node): boolean
    public setIdAttributeNode(arg0: org.w3c.dom.Attr, arg1: boolean): void
    public setIdAttribute(arg0: java.lang.String | string, arg1: boolean): void
    public setIdAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): void
    public getTypeName(): string
    public getTypeNamespace(): string
    public isDerivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): boolean
    public getSchemaTypeInfo(): org.w3c.dom.TypeInfo
    public setReadOnly(arg0: boolean, arg1: boolean): void
    protected synchronizeData(): void
    protected setupDefaultAttributes(): void
    protected reconcileDefaultAttributes(): void
    protected getDefaultAttributes(): com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}