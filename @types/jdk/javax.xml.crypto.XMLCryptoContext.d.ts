declare namespace javax {
  namespace xml {
    namespace crypto {

      interface XMLCryptoContext {

        getBaseURI(): java.lang.String
        setBaseURI(arg0: java.lang.String): void
        getKeySelector(): javax.xml.crypto.KeySelector
        setKeySelector(arg0: javax.xml.crypto.KeySelector): void
        getURIDereferencer(): javax.xml.crypto.URIDereferencer
        setURIDereferencer(arg0: javax.xml.crypto.URIDereferencer): void
        getNamespacePrefix(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        putNamespacePrefix(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getDefaultNamespacePrefix(): java.lang.String
        setDefaultNamespacePrefix(arg0: java.lang.String): void
        setProperty(arg0: java.lang.String, arg1: java.lang.Object): java.lang.Object
        getProperty(arg0: java.lang.String): java.lang.Object
        get(arg0: java.lang.Object): java.lang.Object
        put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
      }

    }
  }
}
