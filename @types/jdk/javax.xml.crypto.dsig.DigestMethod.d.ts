declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        interface DigestMethod extends javax.xml.crypto.XMLStructure, javax.xml.crypto.AlgorithmMethod {
          public static readonly SHA1: java.lang.String
          public static readonly SHA224: java.lang.String
          public static readonly SHA256: java.lang.String
          public static readonly SHA384: java.lang.String
          public static readonly SHA512: java.lang.String
          public static readonly RIPEMD160: java.lang.String
          public static readonly SHA3_224: java.lang.String
          public static readonly SHA3_256: java.lang.String
          public static readonly SHA3_384: java.lang.String
          public static readonly SHA3_512: java.lang.String
          getParameterSpec(): java.security.spec.AlgorithmParameterSpec
        }

      }
    }
  }
}
