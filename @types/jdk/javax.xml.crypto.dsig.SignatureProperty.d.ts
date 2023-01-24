declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        interface SignatureProperty extends javax.xml.crypto.XMLStructure {
          getTarget(): java.lang.String
          getId(): java.lang.String
          getContent(): java.util.List<javax.xml.crypto.XMLStructure>
        }
      }
    }
  }
}
