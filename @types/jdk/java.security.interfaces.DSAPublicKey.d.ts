declare namespace java {
  namespace security {
    namespace interfaces {
      interface DSAPublicKey extends java.security.interfaces.DSAKey, java.security.PublicKey {
        readonly serialVersionUID: long
        getY(): java.math.BigInteger
      }
    }
  }
}
