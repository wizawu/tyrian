declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface SignatureMethod extends javax.xml.crypto.XMLStructure , javax.xml.crypto.AlgorithmMethod {
                    DSA_SHA1: string
                    RSA_SHA1: string
                    HMAC_SHA1: string
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                }
                interface SignatureMethod$$Lambda extends javax.xml.crypto.XMLStructure , javax.xml.crypto.AlgorithmMethod {
                    DSA_SHA1: string
                }
            }
        }
    }
}