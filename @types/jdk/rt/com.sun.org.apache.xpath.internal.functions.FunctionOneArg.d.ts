declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace functions {
                            class FunctionOneArg extends com.sun.org.apache.xpath.internal.functions.Function implements com.sun.org.apache.xpath.internal.ExpressionOwner {
                                public constructor()
                                public getArg0(): com.sun.org.apache.xpath.internal.Expression
                                public setArg(arg0: com.sun.org.apache.xpath.internal.Expression, arg1: int): void
                                public checkNumberArgs(arg0: int): void
                                protected reportWrongNumberArgs(): void
                                public canTraverseOutsideSubtree(): boolean
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                public callArgVisitors(arg0: com.sun.org.apache.xpath.internal.XPathVisitor): void
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