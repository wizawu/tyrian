declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace objects {
class XNodeSet extends com.sun.org.apache.xpath.internal.axes.NodeSequence {
    protected constructor()
    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator)
    public constructor(arg0: com.sun.org.apache.xpath.internal.objects.XNodeSet)
    public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager)
    public constructor(arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTMManager)
    public getType(): int
    public getTypeString(): string
    public getNumberFromNode(arg0: int): double
    public num(): double
    public numWithSideEffects(): double
    public bool(): boolean
    public boolWithSideEffects(): boolean
    public getStringFromNode(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
    public dispatchCharactersEvents(arg0: org.xml.sax.ContentHandler): void
    public xstr(): com.sun.org.apache.xml.internal.utils.XMLString
    public appendToFsb(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer): void
    public str(): string
    public object(): java.lang.Object
    public nodeset(): org.w3c.dom.traversal.NodeIterator
    public nodelist(): org.w3c.dom.NodeList
    public iterRaw(): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public release(arg0: com.sun.org.apache.xml.internal.dtm.DTMIterator): void
    public iter(): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public getFresh(): com.sun.org.apache.xpath.internal.objects.XObject
    public mutableNodeset(): com.sun.org.apache.xpath.internal.NodeSetDTM
    public compare(arg0: com.sun.org.apache.xpath.internal.objects.XObject, arg1: com.sun.org.apache.xpath.internal.objects.Comparator): boolean
    public lessThan(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public lessThanOrEqual(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public greaterThan(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public greaterThanOrEqual(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public equals(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public notEquals(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}