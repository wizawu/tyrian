declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dom {
                class DOMCryptoContext implements javax.xml.crypto.XMLCryptoContext {
                    protected constructor()
                    public getNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                    public putNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                    public getDefaultNamespacePrefix(): string
                    public setDefaultNamespacePrefix(arg0: java.lang.String | string): void
                    public getBaseURI(): string
                    public setBaseURI(arg0: java.lang.String | string): void
                    public getURIDereferencer(): javax.xml.crypto.URIDereferencer
                    public setURIDereferencer(arg0: javax.xml.crypto.URIDereferencer | javax.xml.crypto.URIDereferencer$$Lambda): void
                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                    public getKeySelector(): javax.xml.crypto.KeySelector
                    public setKeySelector(arg0: javax.xml.crypto.KeySelector | javax.xml.crypto.KeySelector$$Lambda): void
                    public getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
                    public setIdAttributeNS(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                    public iterator(): java.util.Iterator
                    public get(arg0: java.lang.Object): java.lang.Object
                    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}