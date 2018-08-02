declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace keyinfo {
interface X509IssuerSerial extends javax.xml.crypto.XMLStructure {
    getIssuerName(): string
    getSerialNumber(): java.math.BigInteger
}

                }
            }
        }
    }
}