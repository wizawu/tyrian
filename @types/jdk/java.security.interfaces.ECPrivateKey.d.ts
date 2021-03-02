declare namespace java {
  namespace security {
    namespace interfaces {

      interface ECPrivateKey extends java.security.PrivateKey, java.security.interfaces.ECKey {
        public static readonly serialVersionUID: long
        getS(): java.math.BigInteger
      }

    }
  }
}
