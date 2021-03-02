declare namespace java {
  namespace security {
    namespace interfaces {

      interface XECPrivateKey extends java.security.interfaces.XECKey, java.security.PrivateKey {
        getScalar(): java.util.Optional<byte[]>
      }

    }
  }
}
