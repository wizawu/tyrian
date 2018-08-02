declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
interface DTMFilter {
    SHOW_ALL: int
    SHOW_ELEMENT: int
    SHOW_ATTRIBUTE: int
    SHOW_TEXT: int
    SHOW_CDATA_SECTION: int
    SHOW_ENTITY_REFERENCE: int
    SHOW_ENTITY: int
    SHOW_PROCESSING_INSTRUCTION: int
    SHOW_COMMENT: int
    SHOW_DOCUMENT: int
    SHOW_DOCUMENT_TYPE: int
    SHOW_DOCUMENT_FRAGMENT: int
    SHOW_NOTATION: int
    SHOW_NAMESPACE: int
    SHOW_BYFUNCTION: int
    acceptNode(arg0: int, arg1: int): short
    acceptNode(arg0: int, arg1: int, arg2: int): short
}

                        }
                    }
                }
            }
        }
    }
}