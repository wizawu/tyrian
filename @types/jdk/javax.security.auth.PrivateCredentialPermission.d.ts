declare namespace javax {
  namespace security {
    namespace auth {

      class PrivateCredentialPermission extends java.security.Permission {
        constructor(arg0: java.lang.String | string, arg1: java.util.Set<java.security.Principal>)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
        public getCredentialClass(): java.lang.String
        public getPrincipals(): java.lang.String[][]
        public implies(arg0: java.security.Permission): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public getActions(): java.lang.String
        public newPermissionCollection(): java.security.PermissionCollection
      }

    }
  }
}
