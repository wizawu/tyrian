declare namespace java {
  namespace security {
    namespace cert {
      interface CertSelector extends java.lang.Cloneable {
        match(arg0: java.security.cert.Certificate): boolean
        clone(): java.lang.Object
      }
    }
  }
}
