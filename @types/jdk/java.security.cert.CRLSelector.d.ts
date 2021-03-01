declare namespace java {
  namespace security {
    namespace cert {

      interface CRLSelector extends java.lang.Cloneable {

        match(arg0: java.security.cert.CRL): boolean
        clone(): java.lang.Object
      }

    }
  }
}
