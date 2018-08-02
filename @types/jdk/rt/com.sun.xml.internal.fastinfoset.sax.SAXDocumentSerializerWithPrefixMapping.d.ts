declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace sax {
class SAXDocumentSerializerWithPrefixMapping extends com.sun.xml.internal.fastinfoset.sax.SAXDocumentSerializer {
    protected _namespaceToPrefixMapping: java.util.Map
    protected _prefixToPrefixMapping: java.util.Map
    protected _lastCheckedNamespace: string
    protected _lastCheckedPrefix: string
    protected _declaredNamespaces: com.sun.xml.internal.fastinfoset.util.StringIntMap
    public constructor(arg0: java.util.Map)
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected encodeElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    protected encodeElementMapEntry(arg0: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap$Entry, arg1: java.lang.String | string): boolean
    protected encodeAttributes(arg0: org.xml.sax.Attributes): void
    protected encodeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): boolean
    protected encodeAttributeMapEntry(arg0: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap$Entry, arg1: java.lang.String | string): boolean
    protected getPrefix(arg0: java.lang.String | string): string
    protected putPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}