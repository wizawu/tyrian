declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace extensions {
                            interface ExpressionContext {
                                getContextNode(): org.w3c.dom.Node
                                getContextNodes(): org.w3c.dom.traversal.NodeIterator
                                getErrorListener(): javax.xml.transform.ErrorListener
                                toNumber(arg0: org.w3c.dom.Node): double
                                toString(arg0: org.w3c.dom.Node): string
                                getVariableOrParam(arg0: com.sun.org.apache.xml.internal.utils.QName): com.sun.org.apache.xpath.internal.objects.XObject
                                getXPathContext(): com.sun.org.apache.xpath.internal.XPathContext
                            }
                        }
                    }
                }
            }
        }
    }
}