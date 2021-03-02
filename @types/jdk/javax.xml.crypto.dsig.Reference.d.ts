declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {

        interface Reference extends javax.xml.crypto.URIReference, javax.xml.crypto.XMLStructure {
          getTransforms(): java.util.List<javax.xml.crypto.dsig.Transform>
          getDigestMethod(): javax.xml.crypto.dsig.DigestMethod
          getId(): java.lang.String
          getDigestValue(): number[]
          getCalculatedDigestValue(): number[]
          validate(arg0: javax.xml.crypto.dsig.XMLValidateContext): boolean
          getDereferencedData(): javax.xml.crypto.Data
          getDigestInputStream(): java.io.InputStream
        }

      }
    }
  }
}
