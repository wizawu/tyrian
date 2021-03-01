declare namespace javax {
  namespace xml {
    namespace xpath {

      interface XPathEvaluationResult<T> {

        type(): javax.xml.xpath.XPathEvaluationResult$XPathResultType
        value(): T
      }

    }
  }
}
