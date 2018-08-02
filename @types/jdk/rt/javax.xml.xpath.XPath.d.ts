declare namespace javax {
    namespace xml {
        namespace xpath {
interface XPath {
    reset(): void
    setXPathVariableResolver(arg0: javax.xml.xpath.XPathVariableResolver | javax.xml.xpath.XPathVariableResolver$$Lambda): void
    getXPathVariableResolver(): javax.xml.xpath.XPathVariableResolver
    setXPathFunctionResolver(arg0: javax.xml.xpath.XPathFunctionResolver | javax.xml.xpath.XPathFunctionResolver$$Lambda): void
    getXPathFunctionResolver(): javax.xml.xpath.XPathFunctionResolver
    setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
    getNamespaceContext(): javax.xml.namespace.NamespaceContext
    compile(arg0: java.lang.String | string): javax.xml.xpath.XPathExpression
    evaluate(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.xml.namespace.QName): java.lang.Object
    evaluate(arg0: java.lang.String | string, arg1: java.lang.Object): string
    evaluate(arg0: java.lang.String | string, arg1: org.xml.sax.InputSource, arg2: javax.xml.namespace.QName): java.lang.Object
    evaluate(arg0: java.lang.String | string, arg1: org.xml.sax.InputSource): string
}

        }
    }
}