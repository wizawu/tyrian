declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        namespace keyinfo {

          interface KeyValue extends javax.xml.crypto.XMLStructure {
            public static readonly DSA_TYPE: java.lang.String
            public static readonly RSA_TYPE: java.lang.String
            getPublicKey(): java.security.PublicKey
          }

        }
      }
    }
  }
}
