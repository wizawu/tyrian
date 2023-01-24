declare namespace org {
  namespace w3c {
    namespace dom {
      namespace traversal {
        interface NodeFilter$$lambda {
          (arg0: org.w3c.dom.Node): number | java.lang.Short
        }

        interface NodeFilter {
          readonly FILTER_ACCEPT: short
          readonly FILTER_REJECT: short
          readonly FILTER_SKIP: short
          readonly SHOW_ALL: int
          readonly SHOW_ELEMENT: int
          readonly SHOW_ATTRIBUTE: int
          readonly SHOW_TEXT: int
          readonly SHOW_CDATA_SECTION: int
          readonly SHOW_ENTITY_REFERENCE: int
          readonly SHOW_ENTITY: int
          readonly SHOW_PROCESSING_INSTRUCTION: int
          readonly SHOW_COMMENT: int
          readonly SHOW_DOCUMENT: int
          readonly SHOW_DOCUMENT_TYPE: int
          readonly SHOW_DOCUMENT_FRAGMENT: int
          readonly SHOW_NOTATION: int
          acceptNode(arg0: org.w3c.dom.Node): number
        }
      }
    }
  }
}
