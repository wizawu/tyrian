declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace patterns {
                            class UnionPattern extends com.sun.org.apache.xpath.internal.Expression {
                                public constructor()
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                public canTraverseOutsideSubtree(): boolean
                                public setPatterns(arg0: com.sun.org.apache.xpath.internal.patterns.StepPattern[]): void
                                public getPatterns(): com.sun.org.apache.xpath.internal.patterns.StepPattern[]
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                                public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}