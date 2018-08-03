declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace keyinfo {
                    interface KeyValue extends javax.xml.crypto.XMLStructure {
                        DSA_TYPE: string
                        RSA_TYPE: string
                        getPublicKey(): java.security.PublicKey
                    }
                    interface KeyValue$$Lambda extends javax.xml.crypto.XMLStructure {
                        DSA_TYPE: string
                    }
                }
            }
        }
    }
}