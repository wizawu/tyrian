declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                class ExpandedNameTable {
                                    public static readonly ELEMENT: int
                                    public static readonly ATTRIBUTE: int
                                    public static readonly TEXT: int
                                    public static readonly CDATA_SECTION: int
                                    public static readonly ENTITY_REFERENCE: int
                                    public static readonly ENTITY: int
                                    public static readonly PROCESSING_INSTRUCTION: int
                                    public static readonly COMMENT: int
                                    public static readonly DOCUMENT: int
                                    public static readonly DOCUMENT_TYPE: int
                                    public static readonly DOCUMENT_FRAGMENT: int
                                    public static readonly NOTATION: int
                                    public static readonly NAMESPACE: int
                                    public constructor()
                                    public getExpandedTypeID(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): int
                                    public getExpandedTypeID(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: boolean): int
                                    public getExpandedTypeID(arg0: int): int
                                    public getLocalName(arg0: int): string
                                    public getLocalNameID(arg0: int): int
                                    public getNamespace(arg0: int): string
                                    public getNamespaceID(arg0: int): int
                                    public getType(arg0: int): short
                                    public getSize(): int
                                    public getExtendedTypes(): com.sun.org.apache.xml.internal.dtm.ref.ExtendedType[]
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}