declare namespace com {
  namespace sun {
    namespace security {
      namespace auth {

        class UnixNumericUserPrincipal implements java.security.Principal, java.io.Serializable {

          public constructor(arg0: java.lang.String)
          public constructor(arg0: long)
          public getName(): java.lang.String
          public longValue(): long
          public toString(): java.lang.String
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
        }

      }
    }
  }
}
