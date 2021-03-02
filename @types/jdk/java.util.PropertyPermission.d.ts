declare namespace java {
  namespace util {

    class PropertyPermission extends java.security.BasicPermission {
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      constructor(arg0: java.lang.String, arg1: int)
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      static getActions(arg0: int): java.lang.String
      public getActions(): java.lang.String
      getMask(): int
      public newPermissionCollection(): java.security.PermissionCollection
    }

  }
}
