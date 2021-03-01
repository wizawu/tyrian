declare namespace java {
  namespace io {

    class FilePermission extends java.security.Permission implements java.io.Serializable {

      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      constructor(arg0: java.lang.String, arg1: int)
      public implies(arg0: java.security.Permission): boolean
      impliesIgnoreMask(arg0: java.io.FilePermission): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      getMask(): int
      public getActions(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
      withNewActions(arg0: int): java.io.FilePermission
    }

  }
}
