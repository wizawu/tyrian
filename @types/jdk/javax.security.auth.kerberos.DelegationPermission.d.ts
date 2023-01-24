declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {
        class DelegationPermission extends java.security.BasicPermission implements java.io.Serializable {
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
          public implies(arg0: java.security.Permission): boolean
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          public newPermissionCollection(): java.security.PermissionCollection
        }
      }
    }
  }
}
