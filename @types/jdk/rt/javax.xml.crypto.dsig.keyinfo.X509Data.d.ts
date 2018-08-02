declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace keyinfo {
interface X509Data extends javax.xml.crypto.XMLStructure {
    TYPE: string
    RAW_X509_CERTIFICATE_TYPE: string
    getContent(): java.util.List
}

                }
            }
        }
    }
}