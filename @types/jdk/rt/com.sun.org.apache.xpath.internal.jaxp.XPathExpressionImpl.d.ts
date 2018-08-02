declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace jaxp {
                            class XPathExpressionImpl implements javax.xml.xpath.XPathExpression {
                                protected constructor()
                                protected constructor(arg0: com.sun.org.apache.xpath.internal.XPath, arg1: com.sun.org.apache.xpath.internal.jaxp.JAXPPrefixResolver, arg2: javax.xml.xpath.XPathFunctionResolver | javax.xml.xpath.XPathFunctionResolver$$Lambda, arg3: javax.xml.xpath.XPathVariableResolver | javax.xml.xpath.XPathVariableResolver$$Lambda)
                                protected constructor(arg0: com.sun.org.apache.xpath.internal.XPath, arg1: com.sun.org.apache.xpath.internal.jaxp.JAXPPrefixResolver, arg2: javax.xml.xpath.XPathFunctionResolver | javax.xml.xpath.XPathFunctionResolver$$Lambda, arg3: javax.xml.xpath.XPathVariableResolver | javax.xml.xpath.XPathVariableResolver$$Lambda, arg4: boolean, arg5: jdk.xml.internal.JdkXmlFeatures)
                                public setXPath(arg0: com.sun.org.apache.xpath.internal.XPath): void
                                public eval(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): java.lang.Object
                                public evaluate(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): java.lang.Object
                                public evaluate(arg0: java.lang.Object): string
                                public evaluate(arg0: org.xml.sax.InputSource, arg1: javax.xml.namespace.QName): java.lang.Object
                                public evaluate(arg0: org.xml.sax.InputSource): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}