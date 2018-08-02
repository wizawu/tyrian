declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
interface TypedXmlWriter {
    commit(): void
    commit(arg0: boolean): void
    block(): void
    getDocument(): com.sun.xml.internal.txw2.Document
    _attribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
    _attribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
    _attribute(arg0: javax.xml.namespace.QName, arg1: java.lang.Object): void
    _namespace(arg0: java.lang.String | string): void
    _namespace(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    _namespace(arg0: java.lang.String | string, arg1: boolean): void
    _pcdata(arg0: java.lang.Object): void
    _cdata(arg0: java.lang.Object): void
    _comment(arg0: java.lang.Object): void
    _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
    _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Class<T>): T
    _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>): T
    _element<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.Class<T>): T
    _cast<T extends com.sun.xml.internal.txw2.TypedXmlWriter>(arg0: java.lang.Class<T>): T
}

                }
            }
        }
    }
}