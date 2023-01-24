declare namespace javax {
  namespace xml {
    namespace xpath {
      interface XPathFunctionResolver$$lambda {
        (arg0: javax.xml.namespace.QName, arg1: number | java.lang.Integer):
          | javax.xml.xpath.XPathFunction
          | javax.xml.xpath.XPathFunction$$lambda
      }

      interface XPathFunctionResolver {
        resolveFunction(
          arg0: javax.xml.namespace.QName,
          arg1: number | java.lang.Integer
        ): javax.xml.xpath.XPathFunction
      }
    }
  }
}
