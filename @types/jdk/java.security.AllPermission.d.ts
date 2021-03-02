declare namespace java {
  namespace security {

    class AllPermission extends java.security.Permission {
      public constructor()
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public getActions(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
    }

  }
}
