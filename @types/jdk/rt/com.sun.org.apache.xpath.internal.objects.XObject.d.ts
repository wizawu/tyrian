declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace objects {
class XObject extends com.sun.org.apache.xpath.internal.Expression implements java.io.Serializable , java.lang.Cloneable {
    protected m_obj: java.lang.Object
    public static CLASS_NULL: int
    public static CLASS_UNKNOWN: int
    public static CLASS_BOOLEAN: int
    public static CLASS_NUMBER: int
    public static CLASS_STRING: int
    public static CLASS_NODESET: int
    public static CLASS_RTREEFRAG: int
    public static CLASS_UNRESOLVEDVARIABLE: int
    public constructor()
    public constructor(arg0: java.lang.Object)
    protected setObject(arg0: java.lang.Object): void
    public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
    public allowDetachToRelease(arg0: boolean): void
    public detach(): void
    public destruct(): void
    public reset(): void
    public dispatchCharactersEvents(arg0: org.xml.sax.ContentHandler): void
    public static create(arg0: java.lang.Object): com.sun.org.apache.xpath.internal.objects.XObject
    public static create(arg0: java.lang.Object, arg1: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
    public getType(): int
    public getTypeString(): string
    public num(): double
    public numWithSideEffects(): double
    public bool(): boolean
    public boolWithSideEffects(): boolean
    public xstr(): com.sun.org.apache.xml.internal.utils.XMLString
    public str(): string
    public toString(): string
    public rtf(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
    public rtree(arg0: com.sun.org.apache.xpath.internal.XPathContext): org.w3c.dom.DocumentFragment
    public rtree(): org.w3c.dom.DocumentFragment
    public rtf(): int
    public object(): java.lang.Object
    public iter(): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public getFresh(): com.sun.org.apache.xpath.internal.objects.XObject
    public nodeset(): org.w3c.dom.traversal.NodeIterator
    public nodelist(): org.w3c.dom.NodeList
    public mutableNodeset(): com.sun.org.apache.xpath.internal.NodeSetDTM
    public castToType(arg0: int, arg1: com.sun.org.apache.xpath.internal.XPathContext): java.lang.Object
    public lessThan(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public lessThanOrEqual(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public greaterThan(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public greaterThanOrEqual(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public equals(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public notEquals(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    protected error(arg0: java.lang.String | string): void
    protected error(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public fixupVariables(arg0: java.util.Vector, arg1: int): void
    public appendToFsb(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer): void
    public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
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