declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
class WalkingIterator extends com.sun.org.apache.xpath.internal.axes.LocPathIterator implements com.sun.org.apache.xpath.internal.ExpressionOwner {
    protected m_lastUsedWalker: com.sun.org.apache.xpath.internal.axes.AxesWalker
    protected m_firstWalker: com.sun.org.apache.xpath.internal.axes.AxesWalker
    public constructor(arg0: com.sun.org.apache.xml.internal.utils.PrefixResolver)
    public getAnalysisBits(): int
    public clone(): java.lang.Object
    public reset(): void
    public setRoot(arg0: int, arg1: java.lang.Object): void
    public nextNode(): int
    public getFirstWalker(): com.sun.org.apache.xpath.internal.axes.AxesWalker
    public setFirstWalker(arg0: com.sun.org.apache.xpath.internal.axes.AxesWalker): void
    public setLastUsedWalker(arg0: com.sun.org.apache.xpath.internal.axes.AxesWalker): void
    public getLastUsedWalker(): com.sun.org.apache.xpath.internal.axes.AxesWalker
    public detach(): void
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
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