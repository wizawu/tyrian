declare namespace org {
    namespace w3c {
        namespace dom {
interface Element extends org.w3c.dom.Node {
    getTagName(): string
    getAttribute(arg0: java.lang.String | string): string
    setAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    removeAttribute(arg0: java.lang.String | string): void
    getAttributeNode(arg0: java.lang.String | string): org.w3c.dom.Attr
    setAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
    removeAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
    getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
    getAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    setAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    removeAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    getAttributeNodeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
    setAttributeNodeNS(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
    getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
    hasAttribute(arg0: java.lang.String | string): boolean
    hasAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    getSchemaTypeInfo(): org.w3c.dom.TypeInfo
    setIdAttribute(arg0: java.lang.String | string, arg1: boolean): void
    setIdAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): void
    setIdAttributeNode(arg0: org.w3c.dom.Attr, arg1: boolean): void
}

        }
    }
}