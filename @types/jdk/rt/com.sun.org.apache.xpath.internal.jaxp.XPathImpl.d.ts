declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace jaxp {
class XPathImpl implements javax.xml.xpath.XPath {
    public setXPathVariableResolver(arg0: javax.xml.xpath.XPathVariableResolver | javax.xml.xpath.XPathVariableResolver$$Lambda): void
    public getXPathVariableResolver(): javax.xml.xpath.XPathVariableResolver
    public setXPathFunctionResolver(arg0: javax.xml.xpath.XPathFunctionResolver | javax.xml.xpath.XPathFunctionResolver$$Lambda): void
    public getXPathFunctionResolver(): javax.xml.xpath.XPathFunctionResolver
    public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
    public evaluate(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.xml.namespace.QName): java.lang.Object
    public evaluate(arg0: java.lang.String | string, arg1: java.lang.Object): string
    public compile(arg0: java.lang.String | string): javax.xml.xpath.XPathExpression
    public evaluate(arg0: java.lang.String | string, arg1: org.xml.sax.InputSource, arg2: javax.xml.namespace.QName): java.lang.Object
    public evaluate(arg0: java.lang.String | string, arg1: org.xml.sax.InputSource): string
    public reset(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}