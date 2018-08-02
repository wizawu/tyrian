declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class AttrImpl extends com.sun.org.apache.xerces.internal.dom.NodeImpl implements org.w3c.dom.Attr , org.w3c.dom.TypeInfo {
                                protected value: java.lang.Object
                                protected name: string
                                protected textNode: com.sun.org.apache.xerces.internal.dom.TextImpl
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
                                protected constructor()
                                protected makeChildNode(): void
                                public setIdAttribute(arg0: boolean): void
                                public isId(): boolean
                                public cloneNode(arg0: boolean): org.w3c.dom.Node
                                public getNodeType(): short
                                public getNodeName(): string
                                public setNodeValue(arg0: java.lang.String | string): void
                                public getTypeName(): string
                                public getTypeNamespace(): string
                                public getSchemaTypeInfo(): org.w3c.dom.TypeInfo
                                public getNodeValue(): string
                                public getName(): string
                                public setValue(arg0: java.lang.String | string): void
                                public getValue(): string
                                public getSpecified(): boolean
                                public getElement(): org.w3c.dom.Element
                                public getOwnerElement(): org.w3c.dom.Element
                                public normalize(): void
                                public setSpecified(arg0: boolean): void
                                public setType(arg0: java.lang.Object): void
                                public toString(): string
                                public hasChildNodes(): boolean
                                public getChildNodes(): org.w3c.dom.NodeList
                                public getFirstChild(): org.w3c.dom.Node
                                public getLastChild(): org.w3c.dom.Node
                                public insertBefore(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public removeChild(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public replaceChild(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): org.w3c.dom.Node
                                public getLength(): int
                                public item(arg0: int): org.w3c.dom.Node
                                public isEqualNode(arg0: org.w3c.dom.Node): boolean
                                public isDerivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): boolean
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