declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        namespace keyinfo {

          interface RetrievalMethod extends javax.xml.crypto.URIReference, javax.xml.crypto.XMLStructure {
            getTransforms(): java.util.List<javax.xml.crypto.dsig.Transform>
            getURI(): java.lang.String
            dereference(arg0: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
          }

        }
      }
    }
  }
}
