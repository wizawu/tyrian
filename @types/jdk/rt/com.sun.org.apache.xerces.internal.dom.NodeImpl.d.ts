declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            abstract class NodeImpl implements org.w3c.dom.Node , org.w3c.dom.NodeList , org.w3c.dom.events.EventTarget , java.lang.Cloneable , java.io.Serializable {
                                public static readonly TREE_POSITION_PRECEDING: short
                                public static readonly TREE_POSITION_FOLLOWING: short
                                public static readonly TREE_POSITION_ANCESTOR: short
                                public static readonly TREE_POSITION_DESCENDANT: short
                                public static readonly TREE_POSITION_EQUIVALENT: short
                                public static readonly TREE_POSITION_SAME_NODE: short
                                public static readonly TREE_POSITION_DISCONNECTED: short
                                public static readonly DOCUMENT_POSITION_DISCONNECTED: short
                                public static readonly DOCUMENT_POSITION_PRECEDING: short
                                public static readonly DOCUMENT_POSITION_FOLLOWING: short
                                public static readonly DOCUMENT_POSITION_CONTAINS: short
                                public static readonly DOCUMENT_POSITION_IS_CONTAINED: short
                                public static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: short
                                public static readonly ELEMENT_DEFINITION_NODE: short
                                protected ownerNode: com.sun.org.apache.xerces.internal.dom.NodeImpl
                                protected flags: short
                                protected static readonly READONLY: short
                                protected static readonly SYNCDATA: short
                                protected static readonly SYNCCHILDREN: short
                                protected static readonly OWNED: short
                                protected static readonly FIRSTCHILD: short
                                protected static readonly SPECIFIED: short
                                protected static readonly IGNORABLEWS: short
                                protected static readonly HASSTRING: short
                                protected static readonly NORMALIZED: short
                                protected static readonly ID: short
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl)
                                public constructor()
                                public abstract getNodeType(): short
                                public abstract getNodeName(): string
                                public getNodeValue(): string
                                public setNodeValue(arg0: java.lang.String | string): void
                                public appendChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public cloneNode(arg0: boolean): org.w3c.dom.Node
                                public getOwnerDocument(): org.w3c.dom.Document
                                protected getNodeNumber(): int
                                public getParentNode(): org.w3c.dom.Node
                                public getNextSibling(): org.w3c.dom.Node
                                public getPreviousSibling(): org.w3c.dom.Node
                                public getAttributes(): org.w3c.dom.NamedNodeMap
                                public hasAttributes(): boolean
                                public hasChildNodes(): boolean
                                public getChildNodes(): org.w3c.dom.NodeList
                                public getFirstChild(): org.w3c.dom.Node
                                public getLastChild(): org.w3c.dom.Node
                                public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public getLength(): int
                                public item(arg0: int): org.w3c.dom.Node
                                public normalize(): void
                                public isSupported(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public getNamespaceURI(): string
                                public getPrefix(): string
                                public setPrefix(arg0: java.lang.String | string): void
                                public getLocalName(): string
                                public addEventListener(arg0: java.lang.String | string, arg1: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$Lambda, arg2: boolean): void
                                public removeEventListener(arg0: java.lang.String | string, arg1: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$Lambda, arg2: boolean): void
                                public dispatchEvent(arg0: org.w3c.dom.events.Event): boolean
                                public getBaseURI(): string
                                public compareTreePosition(arg0: org.w3c.dom.Node): short
                                public compareDocumentPosition(arg0: org.w3c.dom.Node): short
                                public getTextContent(): string
                                public setTextContent(arg0: java.lang.String | string): void
                                public isSameNode(arg0: org.w3c.dom.Node): boolean
                                public isDefaultNamespace(arg0: java.lang.String | string): boolean
                                public lookupPrefix(arg0: java.lang.String | string): string
                                public lookupNamespaceURI(arg0: java.lang.String | string): string
                                public isEqualNode(arg0: org.w3c.dom.Node): boolean
                                public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                                public setUserData(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: org.w3c.dom.UserDataHandler | org.w3c.dom.UserDataHandler$$Lambda): java.lang.Object
                                public getUserData(arg0: java.lang.String | string): java.lang.Object
                                protected getUserDataRecord(): java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.dom.ParentNode$UserDataRecord>
                                public setReadOnly(arg0: boolean, arg1: boolean): void
                                public getReadOnly(): boolean
                                public setUserData(arg0: java.lang.Object): void
                                public getUserData(): java.lang.Object
                                protected changed(): void
                                protected changes(): int
                                protected synchronizeData(): void
                                protected getContainer(): org.w3c.dom.Node
                                public needsSyncChildren(arg0: boolean): void
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}