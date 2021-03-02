declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class DelegationPermission extends java.security.BasicPermission implements java.io.Serializable {
          public constructor(arg0: java.lang.String)
          public constructor(arg0: java.lang.String, arg1: java.lang.String)
          public implies(arg0: java.security.Permission): boolean
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          public newPermissionCollection(): java.security.PermissionCollection
        }

      }
    }
  }
}
