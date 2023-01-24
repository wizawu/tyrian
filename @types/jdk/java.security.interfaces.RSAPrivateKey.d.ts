declare namespace java {
  namespace security {
    namespace interfaces {
      interface RSAPrivateKey extends java.security.PrivateKey, java.security.interfaces.RSAKey {
        readonly serialVersionUID: long
        getPrivateExponent(): java.math.BigInteger
      }
    }
  }
}
