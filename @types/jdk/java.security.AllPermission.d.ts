declare namespace java {
  namespace security {

    class AllPermission extends java.security.Permission {
      public constructor()
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public getActions(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
    }

  }
}
