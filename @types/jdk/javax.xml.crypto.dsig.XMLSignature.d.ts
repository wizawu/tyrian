declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        interface XMLSignature extends javax.xml.crypto.XMLStructure {
          public static readonly XMLNS: java.lang.String
          validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
          getKeyInfo(): javax.xml.crypto.dsig.keyinfo.KeyInfo
          getSignedInfo(): javax.xml.crypto.dsig.SignedInfo
          getObjects(): java.util.List<javax.xml.crypto.dsig.XMLObject>
          getId(): java.lang.String
          getSignatureValue(): javax.xml.crypto.dsig.XMLSignature$SignatureValue
          sign(arg0: javax.xml.crypto.dsig.XMLSignContext): void
          getKeySelectorResult(): javax.xml.crypto.KeySelectorResult
        }

      }
    }
  }
}
