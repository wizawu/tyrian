declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace functions {
                            class FuncExtFunction extends com.sun.org.apache.xpath.internal.functions.Function {
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                public getNamespace(): string
                                public getFunctionName(): string
                                public getMethodKey(): java.lang.Object
                                public getArg(arg0: int): com.sun.org.apache.xpath.internal.Expression
                                public getArgCount(): int
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object)
                                public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                                public setArg(arg0: com.sun.org.apache.xpath.internal.Expression, arg1: int): void
                                public checkNumberArgs(arg0: int): void
                                public callArgVisitors(arg0: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public exprSetParent(arg0: com.sun.org.apache.xpath.internal.ExpressionNode): void
                                protected reportWrongNumberArgs(): void
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}