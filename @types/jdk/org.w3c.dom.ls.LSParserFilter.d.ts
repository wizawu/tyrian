declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {
        interface LSParserFilter {
          readonly FILTER_ACCEPT: short
          readonly FILTER_REJECT: short
          readonly FILTER_SKIP: short
          readonly FILTER_INTERRUPT: short
          startElement(arg0: org.w3c.dom.Element): number
          acceptNode(arg0: org.w3c.dom.Node): number
          getWhatToShow(): number
        }
      }
    }
  }
}
