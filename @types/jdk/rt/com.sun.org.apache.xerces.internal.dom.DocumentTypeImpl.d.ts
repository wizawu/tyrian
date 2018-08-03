declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class DocumentTypeImpl extends com.sun.org.apache.xerces.internal.dom.ParentNode implements org.w3c.dom.DocumentType {
                                protected name: string
                                protected entities: com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl
                                protected notations: com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl
                                protected elements: com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl
                                protected publicID: string
                                protected systemID: string
                                protected internalSubset: string
                                public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                                public getPublicId(): string
                                public getSystemId(): string
                                public setInternalSubset(arg0: java.lang.String | string): void
                                public getInternalSubset(): string
                                public getNodeType(): short
                                public getNodeName(): string
                                public cloneNode(arg0: boolean): org.w3c.dom.Node
                                public getTextContent(): string
                                public setTextContent(arg0: java.lang.String | string): void
                                public isEqualNode(arg0: org.w3c.dom.Node): boolean
                                protected getNodeNumber(): int
                                public getName(): string
                                public getEntities(): org.w3c.dom.NamedNodeMap
                                public getNotations(): org.w3c.dom.NamedNodeMap
                                public setReadOnly(arg0: boolean, arg1: boolean): void
                                public getElements(): org.w3c.dom.NamedNodeMap
                                public setUserData(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: org.w3c.dom.UserDataHandler | org.w3c.dom.UserDataHandler$$Lambda): java.lang.Object
                                public getUserData(arg0: java.lang.String | string): java.lang.Object
                                protected getUserDataRecord(): java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.dom.ParentNode$UserDataRecord>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}