declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
interface DigestMethod extends javax.xml.crypto.XMLStructure , javax.xml.crypto.AlgorithmMethod {
    SHA1: string
    SHA256: string
    SHA512: string
    RIPEMD160: string
    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
}

            }
        }
    }
}