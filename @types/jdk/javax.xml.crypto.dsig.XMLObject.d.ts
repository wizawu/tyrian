declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        interface XMLObject extends javax.xml.crypto.XMLStructure {
          readonly TYPE: java.lang.String
          getContent(): java.util.List<javax.xml.crypto.XMLStructure>
          getId(): java.lang.String
          getMimeType(): java.lang.String
          getEncoding(): java.lang.String
        }
      }
    }
  }
}
