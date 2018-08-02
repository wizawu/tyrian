declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
class FilterExprIteratorSimple extends com.sun.org.apache.xpath.internal.axes.LocPathIterator {
    public constructor()
    public constructor(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda)
    public setRoot(arg0: int, arg1: java.lang.Object): void
    public static executeFilterExpr(arg0: int, arg1: com.sun.org.apache.xpath.internal.XPathContext, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver, arg3: boolean, arg4: int, arg5: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): com.sun.org.apache.xpath.internal.objects.XNodeSet
    public nextNode(): int
    public detach(): void
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public getInnerExpression(): com.sun.org.apache.xpath.internal.Expression
    public setInnerExpression(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): void
    public getAnalysisBits(): int
    public isDocOrdered(): boolean
    public callPredicateVisitors(arg0: com.sun.org.apache.xpath.internal.XPathVisitor): void
    public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): boolean
    public getAxis(): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}