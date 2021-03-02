declare namespace javax {
  namespace xml {
    namespace xpath {

      interface XPathExpression {
        evaluate(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): java.lang.Object
        evaluate(arg0: java.lang.Object): java.lang.String
        evaluate(arg0: org.xml.sax.InputSource, arg1: javax.xml.namespace.QName): java.lang.Object
        evaluate(arg0: org.xml.sax.InputSource): java.lang.String
        evaluateExpression<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
        evaluateExpression(arg0: java.lang.Object): javax.xml.xpath.XPathEvaluationResult<unknown>
        evaluateExpression<T>(arg0: org.xml.sax.InputSource, arg1: java.lang.Class<T>): T
        evaluateExpression(arg0: org.xml.sax.InputSource): javax.xml.xpath.XPathEvaluationResult<unknown>
      }

    }
  }
}
