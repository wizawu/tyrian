declare namespace com {
  namespace sun {
    namespace security {
      namespace auth {

        class UnixNumericGroupPrincipal implements java.security.Principal, java.io.Serializable {

          public constructor(arg0: java.lang.String, arg1: boolean)
          public constructor(arg0: long, arg1: boolean)
          public getName(): java.lang.String
          public longValue(): long
          public isPrimaryGroup(): boolean
          public toString(): java.lang.String
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
        }

      }
    }
  }
}
