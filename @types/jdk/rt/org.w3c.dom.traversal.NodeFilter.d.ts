declare namespace org {
    namespace w3c {
        namespace dom {
            namespace traversal {
interface NodeFilter {
    FILTER_ACCEPT: short
    FILTER_REJECT: short
    FILTER_SKIP: short
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
    acceptNode(arg0: org.w3c.dom.Node): short
}

            }
        }
    }
}