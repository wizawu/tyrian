declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dom {

        class DOMCryptoContext implements javax.xml.crypto.XMLCryptoContext {
          protected constructor()
          public getNamespacePrefix(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
          public putNamespacePrefix(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
          public getDefaultNamespacePrefix(): java.lang.String
          public setDefaultNamespacePrefix(arg0: java.lang.String): void
          public getBaseURI(): java.lang.String
          public setBaseURI(arg0: java.lang.String): void
          public getURIDereferencer(): javax.xml.crypto.URIDereferencer
          public setURIDereferencer(arg0: javax.xml.crypto.URIDereferencer): void
          public getProperty(arg0: java.lang.String): java.lang.Object
          public setProperty(arg0: java.lang.String, arg1: java.lang.Object): java.lang.Object
          public getKeySelector(): javax.xml.crypto.KeySelector
          public setKeySelector(arg0: javax.xml.crypto.KeySelector): void
          public getElementById(arg0: java.lang.String): org.w3c.dom.Element
          public setIdAttributeNS(arg0: org.w3c.dom.Element, arg1: java.lang.String, arg2: java.lang.String): void
          public iterator(): java.util.Iterator<java.util.Map$Entry<java.lang.String,org.w3c.dom.Element>>
          public get(arg0: java.lang.Object): java.lang.Object
          public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
        }

      }
    }
  }
}
