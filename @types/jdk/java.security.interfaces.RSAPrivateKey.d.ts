declare namespace java {
  namespace security {
    namespace interfaces {

      interface RSAPrivateKey extends java.security.PrivateKey, java.security.interfaces.RSAKey {
        public static readonly serialVersionUID: long
        getPrivateExponent(): java.math.BigInteger
      }

    }
  }
}
