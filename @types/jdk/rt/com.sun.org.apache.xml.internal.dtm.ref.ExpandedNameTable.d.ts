declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
class ExpandedNameTable {
    public static ELEMENT: int
    public static ATTRIBUTE: int
    public static TEXT: int
    public static CDATA_SECTION: int
    public static ENTITY_REFERENCE: int
    public static ENTITY: int
    public static PROCESSING_INSTRUCTION: int
    public static COMMENT: int
    public static DOCUMENT: int
    public static DOCUMENT_TYPE: int
    public static DOCUMENT_FRAGMENT: int
    public static NOTATION: int
    public static NAMESPACE: int
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