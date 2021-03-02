declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {

        interface LSParserFilter {
          public static readonly FILTER_ACCEPT: short
          public static readonly FILTER_REJECT: short
          public static readonly FILTER_SKIP: short
          public static readonly FILTER_INTERRUPT: short
          startElement(arg0: org.w3c.dom.Element): number
          acceptNode(arg0: org.w3c.dom.Node): number
          getWhatToShow(): number
        }

      }
    }
  }
}
