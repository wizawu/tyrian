declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        namespace keyinfo {

          interface KeyInfo extends javax.xml.crypto.XMLStructure {
            getContent(): java.util.List<javax.xml.crypto.XMLStructure>
            getId(): java.lang.String
            marshal(arg0: javax.xml.crypto.XMLStructure | javax.xml.crypto.XMLStructure$$lambda, arg1: javax.xml.crypto.XMLCryptoContext): void
          }

        }
      }
    }
  }
}
