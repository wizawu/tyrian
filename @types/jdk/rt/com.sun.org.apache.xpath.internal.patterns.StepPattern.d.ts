declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace patterns {
class StepPattern extends com.sun.org.apache.xpath.internal.patterns.NodeTest implements com.sun.org.apache.xpath.internal.axes.SubContextList , com.sun.org.apache.xpath.internal.ExpressionOwner {
    protected m_axis: int
    public constructor(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: int)
    public constructor(arg0: int, arg1: int, arg2: int)
    public calcTargetString(): void
    public getTargetString(): string
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public setRelativePathPattern(arg0: com.sun.org.apache.xpath.internal.patterns.StepPattern): void
    public getRelativePathPattern(): com.sun.org.apache.xpath.internal.patterns.StepPattern
    public getPredicates(): com.sun.org.apache.xpath.internal.Expression[]
    public canTraverseOutsideSubtree(): boolean
    public getPredicate(arg0: int): com.sun.org.apache.xpath.internal.Expression
    public getPredicateCount(): int
    public setPredicates(arg0: com.sun.org.apache.xpath.internal.Expression[]): void
    public calcScore(): void
    public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xpath.internal.objects.XObject
    public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
    public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: com.sun.org.apache.xml.internal.dtm.DTM, arg3: int): com.sun.org.apache.xpath.internal.objects.XObject
    public getProximityPosition(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
    public getLastPos(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
    protected executeRelativePathPattern(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: com.sun.org.apache.xml.internal.dtm.DTM, arg2: int): com.sun.org.apache.xpath.internal.objects.XObject
    protected executePredicates(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: com.sun.org.apache.xml.internal.dtm.DTM, arg2: int): boolean
    public toString(): string
    public getMatchScore(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): double
    public setAxis(arg0: int): void
    public getAxis(): int
    public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
    protected callSubtreeVisitors(arg0: com.sun.org.apache.xpath.internal.XPathVisitor): void
    public getExpression(): com.sun.org.apache.xpath.internal.Expression
    public setExpression(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): void
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