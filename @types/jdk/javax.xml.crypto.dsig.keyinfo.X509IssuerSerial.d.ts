declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        namespace keyinfo {

          interface X509IssuerSerial extends javax.xml.crypto.XMLStructure {

            getIssuerName(): java.lang.String
            getSerialNumber(): java.math.BigInteger
          }

        }
      }
    }
  }
}
