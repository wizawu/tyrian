declare namespace javax {
  namespace xml {
    namespace crypto {
      interface XMLCryptoContext {
        getBaseURI(): java.lang.String
        setBaseURI(arg0: java.lang.String | string): void
        getKeySelector(): javax.xml.crypto.KeySelector
        setKeySelector(arg0: javax.xml.crypto.KeySelector): void
        getURIDereferencer(): javax.xml.crypto.URIDereferencer
        setURIDereferencer(arg0: javax.xml.crypto.URIDereferencer | javax.xml.crypto.URIDereferencer$$lambda): void
        getNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        putNamespacePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        getDefaultNamespacePrefix(): java.lang.String
        setDefaultNamespacePrefix(arg0: java.lang.String | string): void
        setProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): java.lang.Object
        getProperty(arg0: java.lang.String | string): java.lang.Object
        get(arg0: java.lang.Object | any): java.lang.Object
        put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      }
    }
  }
}
