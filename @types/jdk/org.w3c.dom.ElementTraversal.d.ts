declare namespace org {
  namespace w3c {
    namespace dom {

      interface ElementTraversal {

        getFirstElementChild(): org.w3c.dom.Element
        getLastElementChild(): org.w3c.dom.Element
        getPreviousElementSibling(): org.w3c.dom.Element
        getNextElementSibling(): org.w3c.dom.Element
        getChildElementCount(): int
      }

    }
  }
}
