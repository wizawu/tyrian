declare namespace org {
  namespace w3c {
    namespace dom {
      namespace traversal {

        interface NodeFilter$$lambda {
          (arg0: org.w3c.dom.Node): number | java.lang.Short
        }

        interface NodeFilter {
          public static readonly FILTER_ACCEPT: short
          public static readonly FILTER_REJECT: short
          public static readonly FILTER_SKIP: short
          public static readonly SHOW_ALL: int
          public static readonly SHOW_ELEMENT: int
          public static readonly SHOW_ATTRIBUTE: int
          public static readonly SHOW_TEXT: int
          public static readonly SHOW_CDATA_SECTION: int
          public static readonly SHOW_ENTITY_REFERENCE: int
          public static readonly SHOW_ENTITY: int
          public static readonly SHOW_PROCESSING_INSTRUCTION: int
          public static readonly SHOW_COMMENT: int
          public static readonly SHOW_DOCUMENT: int
          public static readonly SHOW_DOCUMENT_TYPE: int
          public static readonly SHOW_DOCUMENT_FRAGMENT: int
          public static readonly SHOW_NOTATION: int
          acceptNode(arg0: org.w3c.dom.Node): number
        }

      }
    }
  }
}
