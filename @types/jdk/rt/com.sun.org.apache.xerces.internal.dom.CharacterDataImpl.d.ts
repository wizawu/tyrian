declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            abstract class CharacterDataImpl extends com.sun.org.apache.xerces.internal.dom.ChildNode {
                                protected data: string
                                public constructor()
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
                                public getChildNodes(): org.w3c.dom.NodeList
                                public getNodeValue(): string
                                protected setNodeValueInternal(arg0: java.lang.String | string): void
                                protected setNodeValueInternal(arg0: java.lang.String | string, arg1: boolean): void
                                public setNodeValue(arg0: java.lang.String | string): void
                                public getData(): string
                                public getLength(): int
                                public appendData(arg0: java.lang.String | string): void
                                public deleteData(arg0: int, arg1: int): void
                                public insertData(arg0: int, arg1: java.lang.String | string): void
                                public replaceData(arg0: int, arg1: int, arg2: java.lang.String | string): void
                                public setData(arg0: java.lang.String | string): void
                                public substringData(arg0: int, arg1: int): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}