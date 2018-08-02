declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace operations {
abstract class UnaryOperation extends com.sun.org.apache.xpath.internal.Expression implements com.sun.org.apache.xpath.internal.ExpressionOwner {
    protected m_right: com.sun.org.apache.xpath.internal.Expression
    public constructor()
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public canTraverseOutsideSubtree(): boolean
    public setRight(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): void
    public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
    public operate(arg0: com.sun.org.apache.xpath.internal.objects.XObject): com.sun.org.apache.xpath.internal.objects.XObject
    public getOperand(): com.sun.org.apache.xpath.internal.Expression
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