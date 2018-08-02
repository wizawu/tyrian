declare namespace javax {
    namespace xml {
        namespace crypto {
interface XMLCryptoContext {
    getBaseURI(): string
    setBaseURI(arg0: java.lang.String | string): void
    getKeySelector(): javax.xml.crypto.KeySelector
    setKeySelector(arg0: javax.xml.crypto.KeySelector): void
    getURIDereferencer(): javax.xml.crypto.URIDereferencer
    setURIDereferencer(arg0: javax.xml.crypto.URIDereferencer | javax.xml.crypto.URIDereferencer$$Lambda): void
    getNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    putNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    getDefaultNamespacePrefix(): string
    setDefaultNamespacePrefix(arg0: java.lang.String | string): void
    setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
    getProperty(arg0: java.lang.String | string): java.lang.Object
    get(arg0: java.lang.Object): java.lang.Object
    put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
}

        }
    }
}