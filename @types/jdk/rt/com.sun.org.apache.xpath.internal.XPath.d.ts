declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        class XPath implements java.io.Serializable , com.sun.org.apache.xpath.internal.ExpressionOwner {
                            public static SELECT: int
                            public static MATCH: int
                            public static MATCH_SCORE_NONE: double
                            public static MATCH_SCORE_QNAME: double
                            public static MATCH_SCORE_NSWILD: double
                            public static MATCH_SCORE_NODETEST: double
                            public static MATCH_SCORE_OTHER: double
                            public getExpression(): com.sun.org.apache.xpath.internal.Expression
                            public fixupVariables(arg0: java.util.Vector, arg1: int): void
                            public setExpression(arg0: com.sun.org.apache.xpath.internal.Expression): void
                            public getLocator(): javax.xml.transform.SourceLocator
                            public getPatternString(): string
                            public constructor(arg0: java.lang.String | string, arg1: javax.xml.transform.SourceLocator, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver, arg3: int, arg4: javax.xml.transform.ErrorListener)
                            public constructor(arg0: java.lang.String | string, arg1: javax.xml.transform.SourceLocator, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver, arg3: int, arg4: javax.xml.transform.ErrorListener, arg5: com.sun.org.apache.xpath.internal.compiler.FunctionTable)
                            public constructor(arg0: java.lang.String | string, arg1: javax.xml.transform.SourceLocator, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver, arg3: int)
                            public constructor(arg0: com.sun.org.apache.xpath.internal.Expression)
                            public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: org.w3c.dom.Node, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver): com.sun.org.apache.xpath.internal.objects.XObject
                            public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver): com.sun.org.apache.xpath.internal.objects.XObject
                            public bool(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver): boolean
                            public getMatchScore(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): double
                            public warn(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: java.lang.String | string, arg3: java.lang.Object[]): void
                            public assertion(arg0: boolean, arg1: java.lang.String | string): void
                            public error(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: java.lang.String | string, arg3: java.lang.Object[]): void
                            public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}