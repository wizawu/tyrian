declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class NamedNodeMapImpl implements org.w3c.dom.NamedNodeMap , java.io.Serializable {
    protected flags: short
    protected static READONLY: short
    protected static CHANGED: short
    protected static HASDEFAULTS: short
    protected nodes: java.util.List
    protected ownerNode: com.sun.org.apache.xerces.internal.dom.NodeImpl
    protected constructor(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl)
    public getLength(): int
    public item(arg0: int): org.w3c.dom.Node
    public getNamedItem(arg0: java.lang.String | string): org.w3c.dom.Node
    public getNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Node
    public setNamedItem(arg0: org.w3c.dom.Node): org.w3c.dom.Node
    public setNamedItemNS(arg0: org.w3c.dom.Node): org.w3c.dom.Node
    public removeNamedItem(arg0: java.lang.String | string): org.w3c.dom.Node
    public removeNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Node
    public cloneMap(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl): com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl
    protected cloneContent(arg0: com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl): void
    protected setOwnerDocument(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl): void
    protected findNamePoint(arg0: java.lang.String | string, arg1: int): int
    protected findNamePoint(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    protected precedes(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): boolean
    protected removeItem(arg0: int): void
    protected getItem(arg0: int): java.lang.Object
    protected addItem(arg0: org.w3c.dom.Node): int
    protected cloneMap(arg0: java.util.ArrayList): java.util.ArrayList
    protected getNamedItemIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public removeAll(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}