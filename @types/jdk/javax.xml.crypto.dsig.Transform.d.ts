declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        interface Transform extends javax.xml.crypto.XMLStructure, javax.xml.crypto.AlgorithmMethod {
          readonly BASE64: java.lang.String
          readonly ENVELOPED: java.lang.String
          readonly XPATH: java.lang.String
          readonly XPATH2: java.lang.String
          readonly XSLT: java.lang.String
          getParameterSpec(): java.security.spec.AlgorithmParameterSpec
          transform(arg0: javax.xml.crypto.Data, arg1: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data
          transform(
            arg0: javax.xml.crypto.Data,
            arg1: javax.xml.crypto.XMLCryptoContext,
            arg2: java.io.OutputStream
          ): javax.xml.crypto.Data
        }
      }
    }
  }
}
