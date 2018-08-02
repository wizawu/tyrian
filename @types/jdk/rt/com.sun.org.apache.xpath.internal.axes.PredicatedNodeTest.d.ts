declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
abstract class PredicatedNodeTest extends com.sun.org.apache.xpath.internal.patterns.NodeTest implements com.sun.org.apache.xpath.internal.axes.SubContextList {
    protected m_predCount: int
    protected m_foundLast: boolean
    protected m_lpi: com.sun.org.apache.xpath.internal.axes.LocPathIterator
    protected m_proximityPositions: int[]
    public clone(): java.lang.Object
    public getPredicateCount(): int
    public setPredicateCount(arg0: int): void
    protected initPredicateInfo(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int): void
    public getPredicate(arg0: int): com.sun.org.apache.xpath.internal.Expression
    public getProximityPosition(): int
    public getProximityPosition(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
    public getLastPos(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
    protected getProximityPosition(arg0: int): int
    public resetProximityPositions(): void
    public initProximityPosition(arg0: int): void
    protected countProximityPosition(arg0: int): void
    public isReverseAxes(): boolean
    public getPredicateIndex(): int
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    protected nodeToString(arg0: int): string
    public acceptNode(arg0: int): short
    public getLocPathIterator(): com.sun.org.apache.xpath.internal.axes.LocPathIterator
    public setLocPathIterator(arg0: com.sun.org.apache.xpath.internal.axes.LocPathIterator | com.sun.org.apache.xpath.internal.axes.LocPathIterator$$Lambda): void
    public canTraverseOutsideSubtree(): boolean
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