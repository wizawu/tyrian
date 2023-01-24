declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        interface CanonicalizationMethod extends javax.xml.crypto.dsig.Transform {
          readonly INCLUSIVE: java.lang.String
          readonly INCLUSIVE_WITH_COMMENTS: java.lang.String
          readonly EXCLUSIVE: java.lang.String
          readonly EXCLUSIVE_WITH_COMMENTS: java.lang.String
          getParameterSpec(): java.security.spec.AlgorithmParameterSpec
        }
      }
    }
  }
}
