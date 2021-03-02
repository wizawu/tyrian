declare namespace java {
  namespace security {
    namespace interfaces {

      interface XECPublicKey extends java.security.interfaces.XECKey, java.security.PublicKey {
        getU(): java.math.BigInteger
      }

    }
  }
}
