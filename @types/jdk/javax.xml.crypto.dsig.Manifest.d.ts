declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        interface Manifest extends javax.xml.crypto.XMLStructure {
          public static readonly TYPE: java.lang.String
          getId(): java.lang.String
          getReferences(): java.util.List<javax.xml.crypto.dsig.Reference>
        }

      }
    }
  }
}
