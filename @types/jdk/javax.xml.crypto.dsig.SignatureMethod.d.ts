declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        interface SignatureMethod extends javax.xml.crypto.XMLStructure, javax.xml.crypto.AlgorithmMethod {
          public static readonly DSA_SHA1: java.lang.String
          public static readonly DSA_SHA256: java.lang.String
          public static readonly RSA_SHA1: java.lang.String
          public static readonly RSA_SHA224: java.lang.String
          public static readonly RSA_SHA256: java.lang.String
          public static readonly RSA_SHA384: java.lang.String
          public static readonly RSA_SHA512: java.lang.String
          public static readonly SHA1_RSA_MGF1: java.lang.String
          public static readonly SHA224_RSA_MGF1: java.lang.String
          public static readonly SHA256_RSA_MGF1: java.lang.String
          public static readonly SHA384_RSA_MGF1: java.lang.String
          public static readonly SHA512_RSA_MGF1: java.lang.String
          public static readonly ECDSA_SHA1: java.lang.String
          public static readonly ECDSA_SHA224: java.lang.String
          public static readonly ECDSA_SHA256: java.lang.String
          public static readonly ECDSA_SHA384: java.lang.String
          public static readonly ECDSA_SHA512: java.lang.String
          public static readonly HMAC_SHA1: java.lang.String
          public static readonly HMAC_SHA224: java.lang.String
          public static readonly HMAC_SHA256: java.lang.String
          public static readonly HMAC_SHA384: java.lang.String
          public static readonly HMAC_SHA512: java.lang.String
          getParameterSpec(): java.security.spec.AlgorithmParameterSpec
        }

      }
    }
  }
}
