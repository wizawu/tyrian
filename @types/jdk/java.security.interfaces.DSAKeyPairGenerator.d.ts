declare namespace java {
  namespace security {
    namespace interfaces {
      interface DSAKeyPairGenerator {
        initialize(arg0: java.security.interfaces.DSAParams, arg1: java.security.SecureRandom): void
        initialize(
          arg0: number | java.lang.Integer,
          arg1: boolean | java.lang.Boolean,
          arg2: java.security.SecureRandom
        ): void
      }
    }
  }
}
