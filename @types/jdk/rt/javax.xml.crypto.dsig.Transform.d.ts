declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                interface Transform extends javax.xml.crypto.XMLStructure , javax.xml.crypto.AlgorithmMethod {
                    BASE64: string
                    ENVELOPED: string
                    XPATH: string
                    XPATH2: string
                    XSLT: string
                    getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                    transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
                    transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext, arg2: java.io.OutputStream): javax.xml.crypto.Data
                }
            }
        }
    }
}