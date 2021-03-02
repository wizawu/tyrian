declare namespace com {
  namespace sun {
    namespace security {
      namespace auth {

        class UnixNumericUserPrincipal implements java.security.Principal, java.io.Serializable {
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: number | java.lang.Long)
          public getName(): java.lang.String
          public longValue(): number
          public toString(): java.lang.String
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
        }

      }
    }
  }
}
