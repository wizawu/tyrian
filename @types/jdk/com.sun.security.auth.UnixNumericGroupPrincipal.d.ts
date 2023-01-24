declare namespace com {
  namespace sun {
    namespace security {
      namespace auth {
        class UnixNumericGroupPrincipal implements java.security.Principal, java.io.Serializable {
          public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
          public constructor(arg0: number | java.lang.Long, arg1: boolean | java.lang.Boolean)
          public getName(): java.lang.String
          public longValue(): number
          public isPrimaryGroup(): boolean
          public toString(): java.lang.String
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
        }
      }
    }
  }
}
