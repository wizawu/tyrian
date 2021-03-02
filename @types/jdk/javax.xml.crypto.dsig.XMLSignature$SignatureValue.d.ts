declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        interface XMLSignature$SignatureValue extends javax.xml.crypto.XMLStructure {
          getId(): java.lang.String
          getValue(): number[]
          validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
        }

      }
    }
  }
}
