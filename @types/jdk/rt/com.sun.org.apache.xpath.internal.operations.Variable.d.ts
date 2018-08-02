declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace operations {
class Variable extends com.sun.org.apache.xpath.internal.Expression implements com.sun.org.apache.xpath.internal.axes.PathComponent {
    protected m_qname: com.sun.org.apache.xml.internal.utils.QName
    protected m_index: int
    protected m_isGlobal: boolean
    public constructor()
    public setIndex(arg0: int): void
    public getIndex(): int
    public setIsGlobal(arg0: boolean): void
    public getGlobal(): boolean
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public setQName(arg0: com.sun.org.apache.xml.internal.utils.QName): void
    public getQName(): com.sun.org.apache.xml.internal.utils.QName
    public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
    public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: boolean): com.sun.org.apache.xpath.internal.objects.XObject
    public isStableNumber(): boolean
    public getAnalysisBits(): int
    public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
    public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): boolean
    public isPsuedoVarRef(): boolean
    public static class: java.lang.Class<any>
}

class Variable$$Lambda extends com.sun.org.apache.xpath.internal.Expression implements com.sun.org.apache.xpath.internal.axes.PathComponent {
    protected m_qname: com.sun.org.apache.xml.internal.utils.QName
}

                        }
                    }
                }
            }
        }
    }
}