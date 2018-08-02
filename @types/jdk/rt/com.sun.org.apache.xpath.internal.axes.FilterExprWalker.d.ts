declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
class FilterExprWalker extends com.sun.org.apache.xpath.internal.axes.AxesWalker {
    public constructor(arg0: com.sun.org.apache.xpath.internal.axes.WalkingIterator)
    public init(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int, arg2: int): void
    public detach(): void
    public setRoot(arg0: int): void
    public clone(): java.lang.Object
    public acceptNode(arg0: int): short
    public getNextNode(): int
    public getLastPos(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public getInnerExpression(): com.sun.org.apache.xpath.internal.Expression
    public setInnerExpression(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): void
    public getAnalysisBits(): int
    public isDocOrdered(): boolean
    public getAxis(): int
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