declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        class XPathContext$XPathExpressionContext implements com.sun.org.apache.xalan.internal.extensions.ExpressionContext {
                            public constructor(arg0: com.sun.org.apache.xpath.internal.XPathContext)
                            public getXPathContext(): com.sun.org.apache.xpath.internal.XPathContext
                            public getDTMManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
                            public getContextNode(): org.w3c.dom.Node
                            public getContextNodes(): org.w3c.dom.traversal.NodeIterator
                            public getErrorListener(): javax.xml.transform.ErrorListener
                            public overrideDefaultParser(): boolean
                            public setOverrideDefaultParser(arg0: boolean): void
                            public toNumber(arg0: org.w3c.dom.Node): double
                            public toString(arg0: org.w3c.dom.Node): string
                            public getVariableOrParam(arg0: com.sun.org.apache.xml.internal.utils.QName): com.sun.org.apache.xpath.internal.objects.XObject
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}