declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
                            class FilterExprIterator extends com.sun.org.apache.xpath.internal.axes.BasicTestIterator {
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda)
                                public setRoot(arg0: int, arg1: java.lang.Object): void
                                protected getNextNode(): int
                                public detach(): void
                                public fixupVariables(arg0: java.util.Vector, arg1: int): void
                                public getInnerExpression(): com.sun.org.apache.xpath.internal.Expression
                                public setInnerExpression(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): void
                                public getAnalysisBits(): int
                                public isDocOrdered(): boolean
                                public callPredicateVisitors(arg0: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}