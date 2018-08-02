declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
class AxesWalker extends com.sun.org.apache.xpath.internal.axes.PredicatedNodeTest implements java.lang.Cloneable , com.sun.org.apache.xpath.internal.axes.PathComponent , com.sun.org.apache.xpath.internal.ExpressionOwner {
    protected m_nextWalker: com.sun.org.apache.xpath.internal.axes.AxesWalker
    protected m_axis: int
    protected m_traverser: com.sun.org.apache.xml.internal.dtm.DTMAxisTraverser
    public constructor(arg0: com.sun.org.apache.xpath.internal.axes.LocPathIterator | com.sun.org.apache.xpath.internal.axes.LocPathIterator$$Lambda, arg1: int)
    public wi(): com.sun.org.apache.xpath.internal.axes.WalkingIterator
    public init(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int, arg2: int): void
    public clone(): java.lang.Object
    public detach(): void
    public getRoot(): int
    public getAnalysisBits(): int
    public setRoot(arg0: int): void
    public getCurrentNode(): int
    public setNextWalker(arg0: com.sun.org.apache.xpath.internal.axes.AxesWalker): void
    public getNextWalker(): com.sun.org.apache.xpath.internal.axes.AxesWalker
    public setPrevWalker(arg0: com.sun.org.apache.xpath.internal.axes.AxesWalker): void
    public getPrevWalker(): com.sun.org.apache.xpath.internal.axes.AxesWalker
    protected getNextNode(): int
    public nextNode(): int
    public getLastPos(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
    public setDefaultDTM(arg0: com.sun.org.apache.xml.internal.dtm.DTM): void
    public getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
    public isDocOrdered(): boolean
    public getAxis(): int
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