declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace patterns {
                            class NodeTest extends com.sun.org.apache.xpath.internal.Expression {
                                public static WILD: string
                                public static SUPPORTS_PRE_STRIPPING: string
                                protected m_whatToShow: int
                                public static SHOW_BYFUNCTION: int
                                protected m_name: string
                                public static SCORE_NODETEST: com.sun.org.apache.xpath.internal.objects.XNumber
                                public static SCORE_NSWILD: com.sun.org.apache.xpath.internal.objects.XNumber
                                public static SCORE_QNAME: com.sun.org.apache.xpath.internal.objects.XNumber
                                public static SCORE_OTHER: com.sun.org.apache.xpath.internal.objects.XNumber
                                public static SCORE_NONE: com.sun.org.apache.xpath.internal.objects.XNumber
                                public getWhatToShow(): int
                                public setWhatToShow(arg0: int): void
                                public getNamespace(): string
                                public setNamespace(arg0: java.lang.String | string): void
                                public getLocalName(): string
                                public setLocalName(arg0: java.lang.String | string): void
                                public constructor(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                public constructor(arg0: int)
                                public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): boolean
                                public constructor()
                                public initNodeTest(arg0: int): void
                                public initNodeTest(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public getStaticScore(): com.sun.org.apache.xpath.internal.objects.XNumber
                                public setStaticScore(arg0: com.sun.org.apache.xpath.internal.objects.XNumber): void
                                protected calcScore(): void
                                public getDefaultScore(): double
                                public static getNodeTypeTest(arg0: int): int
                                public static debugWhatToShow(arg0: int): void
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xpath.internal.objects.XObject
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: com.sun.org.apache.xml.internal.dtm.DTM, arg3: int): com.sun.org.apache.xpath.internal.objects.XObject
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}