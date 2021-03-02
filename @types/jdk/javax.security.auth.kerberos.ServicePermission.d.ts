declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class ServicePermission extends java.security.Permission implements java.io.Serializable {
          public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
          constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
          public implies(arg0: java.security.Permission): boolean
          impliesIgnoreMask(arg0: javax.security.auth.kerberos.ServicePermission): boolean
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          static getActions(arg0: number | java.lang.Integer): java.lang.String
          public getActions(): java.lang.String
          public newPermissionCollection(): java.security.PermissionCollection
          getMask(): number
        }

      }
    }
  }
}
