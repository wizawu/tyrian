declare namespace org {
  namespace w3c {
    namespace dom {
      namespace xpath {
        interface XPathEvaluator {
          createExpression(
            arg0: java.lang.String | string,
            arg1: org.w3c.dom.xpath.XPathNSResolver | org.w3c.dom.xpath.XPathNSResolver$$lambda
          ): org.w3c.dom.xpath.XPathExpression
          createNSResolver(arg0: org.w3c.dom.Node): org.w3c.dom.xpath.XPathNSResolver
          evaluate(
            arg0: java.lang.String | string,
            arg1: org.w3c.dom.Node,
            arg2: org.w3c.dom.xpath.XPathNSResolver | org.w3c.dom.xpath.XPathNSResolver$$lambda,
            arg3: number | java.lang.Short,
            arg4: java.lang.Object | any
          ): java.lang.Object
        }
      }
    }
  }
}
