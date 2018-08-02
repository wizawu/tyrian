declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DeferredDocumentImpl extends com.sun.org.apache.xerces.internal.dom.DocumentImpl implements com.sun.org.apache.xerces.internal.dom.DeferredNode {
    protected static CHUNK_SHIFT: int
    protected static CHUNK_SIZE: int
    protected static CHUNK_MASK: int
    protected static INITIAL_CHUNK_COUNT: int
    protected fNodeCount: int
    protected fNodeType: int[][]
    protected fNodeName: java.lang.Object[][]
    protected fNodeValue: java.lang.Object[][]
    protected fNodeParent: int[][]
    protected fNodeLastChild: int[][]
    protected fNodePrevSib: int[][]
    protected fNodeURI: java.lang.Object[][]
    protected fNodeExtra: int[][]
    protected fIdCount: int
    protected fIdName: java.lang.String[]
    protected fIdElement: int[]
    protected fNamespacesEnabled: boolean
    public constructor()
    public constructor(arg0: boolean)
    public constructor(arg0: boolean, arg1: boolean)
    public getImplementation(): org.w3c.dom.DOMImplementation
    public createDeferredDocument(): int
    public createDeferredDocumentType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public setInternalSubset(arg0: int, arg1: java.lang.String | string): void
    public createDeferredNotation(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): int
    public createDeferredEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): int
    public getDeferredEntityBaseURI(arg0: int): string
    public setEntityInfo(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public setTypeInfo(arg0: int, arg1: java.lang.Object): void
    public setInputEncoding(arg0: int, arg1: java.lang.String | string): void
    public createDeferredEntityReference(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public createDeferredElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): int
    public createDeferredElement(arg0: java.lang.String | string): int
    public createDeferredElement(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public setDeferredAttribute(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean, arg5: boolean, arg6: java.lang.Object): int
    public setDeferredAttribute(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean): int
    public createDeferredAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): int
    public createDeferredAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): int
    public createDeferredElementDefinition(arg0: java.lang.String | string): int
    public createDeferredTextNode(arg0: java.lang.String | string, arg1: boolean): int
    public createDeferredCDATASection(arg0: java.lang.String | string): int
    public createDeferredProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public createDeferredComment(arg0: java.lang.String | string): int
    public cloneNode(arg0: int, arg1: boolean): int
    public appendChild(arg0: int, arg1: int): void
    public setAttributeNode(arg0: int, arg1: int): int
    public setIdAttributeNode(arg0: int, arg1: int): void
    public setIdAttribute(arg0: int): void
    public insertBefore(arg0: int, arg1: int, arg2: int): int
    public setAsLastChild(arg0: int, arg1: int): void
    public getParentNode(arg0: int): int
    public getParentNode(arg0: int, arg1: boolean): int
    public getLastChild(arg0: int): int
    public getLastChild(arg0: int, arg1: boolean): int
    public getPrevSibling(arg0: int): int
    public getPrevSibling(arg0: int, arg1: boolean): int
    public getRealPrevSibling(arg0: int): int
    public getRealPrevSibling(arg0: int, arg1: boolean): int
    public lookupElementDefinition(arg0: java.lang.String | string): int
    public getNodeObject(arg0: int): com.sun.org.apache.xerces.internal.dom.DeferredNode
    public getNodeName(arg0: int): string
    public getNodeName(arg0: int, arg1: boolean): string
    public getNodeValueString(arg0: int): string
    public getNodeValueString(arg0: int, arg1: boolean): string
    public getNodeValue(arg0: int): string
    public getTypeInfo(arg0: int): java.lang.Object
    public getNodeValue(arg0: int, arg1: boolean): string
    public getNodeExtra(arg0: int): int
    public getNodeExtra(arg0: int, arg1: boolean): int
    public getNodeType(arg0: int): short
    public getNodeType(arg0: int, arg1: boolean): short
    public getAttribute(arg0: int, arg1: java.lang.String | string): string
    public getNodeURI(arg0: int): string
    public getNodeURI(arg0: int, arg1: boolean): string
    public putIdentifier(arg0: java.lang.String | string, arg1: int): void
    public print(): void
    public getNodeIndex(): int
    protected synchronizeData(): void
    protected synchronizeChildren(): void
    protected synchronizeChildren(arg0: com.sun.org.apache.xerces.internal.dom.AttrImpl, arg1: int): void
    protected synchronizeChildren(arg0: com.sun.org.apache.xerces.internal.dom.ParentNode, arg1: int): void
    protected ensureCapacity(arg0: int): void
    protected createNode(arg0: short): int
    protected static binarySearch(arg0: int[], arg1: int, arg2: int, arg3: int): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}