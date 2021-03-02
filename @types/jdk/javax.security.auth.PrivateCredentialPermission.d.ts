declare namespace javax {
  namespace security {
    namespace auth {

      class PrivateCredentialPermission extends java.security.Permission {
        constructor(arg0: java.lang.String, arg1: java.util.Set<java.security.Principal>)
        public constructor(arg0: java.lang.String, arg1: java.lang.String)
        public getCredentialClass(): java.lang.String
        public getPrincipals(): java.lang.String[][]
        public implies(arg0: java.security.Permission): boolean
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public getActions(): java.lang.String
        public newPermissionCollection(): java.security.PermissionCollection
      }

    }
  }
}
