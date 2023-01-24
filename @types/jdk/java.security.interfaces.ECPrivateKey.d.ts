declare namespace java {
  namespace security {
    namespace interfaces {
      interface ECPrivateKey extends java.security.PrivateKey, java.security.interfaces.ECKey {
        readonly serialVersionUID: long
        getS(): java.math.BigInteger
      }
    }
  }
}
