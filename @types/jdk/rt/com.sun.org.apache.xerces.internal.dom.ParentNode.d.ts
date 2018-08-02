declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
abstract class ParentNode extends com.sun.org.apache.xerces.internal.dom.ChildNode {
    protected ownerDocument: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl
    protected firstChild: com.sun.org.apache.xerces.internal.dom.ChildNode
    protected fNodeListCache: com.sun.org.apache.xerces.internal.dom.NodeListCache
    protected constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl)
    public constructor()
    public cloneNode(arg0: boolean): org.w3c.dom.Node
    public getOwnerDocument(): org.w3c.dom.Document
    public hasChildNodes(): boolean
    public getChildNodes(): org.w3c.dom.NodeList
    public getFirstChild(): org.w3c.dom.Node
    public getLastChild(): org.w3c.dom.Node
    public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
    public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
    public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
    public getTextContent(): string
    public setTextContent(arg0: java.lang.String | string): void
    public getLength(): int
    public item(arg0: int): org.w3c.dom.Node
    protected getChildNodesUnoptimized(): org.w3c.dom.NodeList
    public normalize(): void
    public isEqualNode(arg0: org.w3c.dom.Node): boolean
    public setReadOnly(arg0: boolean, arg1: boolean): void
    protected synchronizeChildren(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}