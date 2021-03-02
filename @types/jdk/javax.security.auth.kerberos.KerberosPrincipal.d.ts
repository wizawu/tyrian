declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class KerberosPrincipal implements java.security.Principal, java.io.Serializable {
          public static readonly KRB_NT_UNKNOWN: int
          public static readonly KRB_NT_PRINCIPAL: int
          public static readonly KRB_NT_SRV_INST: int
          public static readonly KRB_NT_SRV_HST: int
          public static readonly KRB_NT_SRV_XHST: int
          public static readonly KRB_NT_UID: int
          static readonly KRB_NT_ENTERPRISE: int
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
          public getRealm(): java.lang.String
          public hashCode(): number
          public equals(arg0: java.lang.Object | any): boolean
          public getName(): java.lang.String
          public getNameType(): number
          public toString(): java.lang.String
        }

      }
    }
  }
}
