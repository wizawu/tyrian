declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace functions {
                            abstract class Function extends com.sun.org.apache.xpath.internal.Expression {
                                public constructor()
                                public setArg(arg0: com.sun.org.apache.xpath.internal.Expression, arg1: int): void
                                public checkNumberArgs(arg0: int): void
                                protected reportWrongNumberArgs(): void
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                                public callArgVisitors(arg0: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression): boolean
                                public postCompileStep(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}