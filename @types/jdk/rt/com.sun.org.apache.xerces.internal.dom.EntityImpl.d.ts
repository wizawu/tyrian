declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class EntityImpl extends com.sun.org.apache.xerces.internal.dom.ParentNode implements org.w3c.dom.Entity {
                                protected name: string
                                protected publicId: string
                                protected systemId: string
                                protected encoding: string
                                protected inputEncoding: string
                                protected version: string
                                protected notationName: string
                                protected baseURI: string
                                public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
                                public getNodeType(): short
                                public getNodeName(): string
                                public setNodeValue(arg0: java.lang.String | string): void
                                public setPrefix(arg0: java.lang.String | string): void
                                public cloneNode(arg0: boolean): org.w3c.dom.Node
                                public getPublicId(): string
                                public getSystemId(): string
                                public getXmlVersion(): string
                                public getXmlEncoding(): string
                                public getNotationName(): string
                                public setPublicId(arg0: java.lang.String | string): void
                                public setXmlEncoding(arg0: java.lang.String | string): void
                                public getInputEncoding(): string
                                public setInputEncoding(arg0: java.lang.String | string): void
                                public setXmlVersion(arg0: java.lang.String | string): void
                                public setSystemId(arg0: java.lang.String | string): void
                                public setNotationName(arg0: java.lang.String | string): void
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