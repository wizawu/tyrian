declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        class XPathVisitor {
                            public constructor()
                            public visitLocationPath(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.axes.LocPathIterator): boolean
                            public visitUnionPath(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.axes.UnionPathIterator): boolean
                            public visitStep(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.patterns.NodeTest): boolean
                            public visitPredicate(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.Expression): boolean
                            public visitBinaryOperation(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.operations.Operation): boolean
                            public visitUnaryOperation(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.operations.UnaryOperation): boolean
                            public visitVariableRef(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.operations.Variable): boolean
                            public visitFunction(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.functions.Function): boolean
                            public visitMatchPattern(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.patterns.StepPattern): boolean
                            public visitUnionPattern(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.patterns.UnionPattern): boolean
                            public visitStringLiteral(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.objects.XString): boolean
                            public visitNumberLiteral(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.objects.XNumber): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}