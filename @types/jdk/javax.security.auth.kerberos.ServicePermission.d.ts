declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class ServicePermission extends java.security.Permission implements java.io.Serializable {
          public constructor(arg0: java.lang.String, arg1: java.lang.String)
          constructor(arg0: java.lang.String, arg1: int)
          public implies(arg0: java.security.Permission): boolean
          impliesIgnoreMask(arg0: javax.security.auth.kerberos.ServicePermission): boolean
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          static getActions(arg0: int): java.lang.String
          public getActions(): java.lang.String
          public newPermissionCollection(): java.security.PermissionCollection
          getMask(): int
        }

      }
    }
  }
}
