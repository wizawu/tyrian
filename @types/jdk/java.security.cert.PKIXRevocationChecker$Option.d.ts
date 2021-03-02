declare namespace java {
  namespace security {
    namespace cert {

      class PKIXRevocationChecker$Option extends java.lang.Enum<java.security.cert.PKIXRevocationChecker$Option> {
        public static readonly ONLY_END_ENTITY: java.security.cert.PKIXRevocationChecker$Option
        public static readonly PREFER_CRLS: java.security.cert.PKIXRevocationChecker$Option
        public static readonly NO_FALLBACK: java.security.cert.PKIXRevocationChecker$Option
        public static readonly SOFT_FAIL: java.security.cert.PKIXRevocationChecker$Option
        public static values(): java.security.cert.PKIXRevocationChecker$Option[]
        public static valueOf(arg0: java.lang.String | string): java.security.cert.PKIXRevocationChecker$Option
      }

    }
  }
}
