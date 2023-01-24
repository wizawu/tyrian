declare namespace javax {
  namespace crypto {
    namespace interfaces {
      interface DHPublicKey extends javax.crypto.interfaces.DHKey, java.security.PublicKey {
        readonly serialVersionUID: long
        getY(): java.math.BigInteger
      }
    }
  }
}
