declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface CanonicalizationMethod extends javax.xml.crypto.dsig.Transform {
                    INCLUSIVE: string
                    INCLUSIVE_WITH_COMMENTS: string
                    EXCLUSIVE: string
                    EXCLUSIVE_WITH_COMMENTS: string
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                }
            }
        }
    }
}