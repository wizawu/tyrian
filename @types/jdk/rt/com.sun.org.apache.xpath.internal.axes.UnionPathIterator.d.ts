declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
class UnionPathIterator extends com.sun.org.apache.xpath.internal.axes.LocPathIterator implements java.lang.Cloneable , com.sun.org.apache.xml.internal.dtm.DTMIterator , java.io.Serializable , com.sun.org.apache.xpath.internal.axes.PathComponent {
    protected m_exprs: com.sun.org.apache.xpath.internal.axes.LocPathIterator[]
    protected m_iterators: com.sun.org.apache.xml.internal.dtm.DTMIterator[]
    public constructor()
    public setRoot(arg0: int, arg1: java.lang.Object): void
    public addIterator(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator): void
    public detach(): void
    public constructor(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int)
    public static createUnionIterator(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int): com.sun.org.apache.xpath.internal.axes.LocPathIterator
    public getAnalysisBits(): int
    public clone(): java.lang.Object
    protected createDTMIterator(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int): com.sun.org.apache.xpath.internal.axes.LocPathIterator
    protected loadLocationPaths(arg0: com.sun.org.apache.xpath.internal.compiler.Compiler, arg1: int, arg2: int): void
    public nextNode(): int
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public getAxis(): int
    public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
    public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): boolean
    public static class: java.lang.Class<any>
}

class UnionPathIterator$$Lambda extends com.sun.org.apache.xpath.internal.axes.LocPathIterator implements java.lang.Cloneable , com.sun.org.apache.xml.internal.dtm.DTMIterator , java.io.Serializable , com.sun.org.apache.xpath.internal.axes.PathComponent {
    protected m_exprs: com.sun.org.apache.xpath.internal.axes.LocPathIterator[]
}

                        }
                    }
                }
            }
        }
    }
}