declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace operations {
                            class Operation extends com.sun.org.apache.xpath.internal.Expression implements com.sun.org.apache.xpath.internal.ExpressionOwner {
                                protected m_left: com.sun.org.apache.xpath.internal.Expression
                                protected m_right: com.sun.org.apache.xpath.internal.Expression
                                public constructor()
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                public canTraverseOutsideSubtree(): boolean
                                public setLeftRight(arg0: com.sun.org.apache.xpath.internal.Expression, arg1: com.sun.org.apache.xpath.internal.Expression): void
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                                public operate(arg0: com.sun.org.apache.xpath.internal.objects.XObject, arg1: com.sun.org.apache.xpath.internal.objects.XObject): com.sun.org.apache.xpath.internal.objects.XObject
                                public getLeftOperand(): com.sun.org.apache.xpath.internal.Expression
                                public getRightOperand(): com.sun.org.apache.xpath.internal.Expression
                                public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public getExpression(): com.sun.org.apache.xpath.internal.Expression
                                public setExpression(arg0: com.sun.org.apache.xpath.internal.Expression): void
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