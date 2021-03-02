declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        interface CanonicalizationMethod extends javax.xml.crypto.dsig.Transform {
          public static readonly INCLUSIVE: java.lang.String
          public static readonly INCLUSIVE_WITH_COMMENTS: java.lang.String
          public static readonly EXCLUSIVE: java.lang.String
          public static readonly EXCLUSIVE_WITH_COMMENTS: java.lang.String
          getParameterSpec(): java.security.spec.AlgorithmParameterSpec
        }

      }
    }
  }
}
