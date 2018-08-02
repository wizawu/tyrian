declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace objects {
class XRTreeFrag extends com.sun.org.apache.xpath.internal.objects.XObject implements java.lang.Cloneable {
    protected m_allowRelease: boolean
    public constructor(arg0: int, arg1: com.sun.org.apache.xpath.internal.XPathContext, arg2: com.sun.org.apache.xpath.internal.ExpressionNode)
    public constructor(arg0: int, arg1: com.sun.org.apache.xpath.internal.XPathContext)
    public object(): java.lang.Object
    public constructor(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda)
    public allowDetachToRelease(arg0: boolean): void
    public detach(): void
    public getType(): int
    public getTypeString(): string
    public num(): double
    public bool(): boolean
    public xstr(): com.sun.org.apache.xml.internal.utils.XMLString
    public appendToFsb(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer): void
    public str(): string
    public rtf(): int
    public asNodeIterator(): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public convertToNodeset(): org.w3c.dom.NodeList
    public equals(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}