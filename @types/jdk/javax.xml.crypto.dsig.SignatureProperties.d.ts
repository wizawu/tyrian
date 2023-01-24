declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        interface SignatureProperties extends javax.xml.crypto.XMLStructure {
          readonly TYPE: java.lang.String
          getId(): java.lang.String
          getProperties(): java.util.List<javax.xml.crypto.dsig.SignatureProperty>
        }
      }
    }
  }
}
