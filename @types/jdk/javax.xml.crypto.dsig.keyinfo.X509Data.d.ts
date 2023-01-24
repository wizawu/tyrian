declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        namespace keyinfo {
          interface X509Data extends javax.xml.crypto.XMLStructure {
            readonly TYPE: java.lang.String
            readonly RAW_X509_CERTIFICATE_TYPE: java.lang.String
            getContent(): java.util.List<unknown>
          }
        }
      }
    }
  }
}
