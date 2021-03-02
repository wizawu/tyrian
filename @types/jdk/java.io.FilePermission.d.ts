declare namespace java {
  namespace io {

    class FilePermission extends java.security.Permission implements java.io.Serializable {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public implies(arg0: java.security.Permission): boolean
      impliesIgnoreMask(arg0: java.io.FilePermission): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      getMask(): number
      public getActions(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
      withNewActions(arg0: number | java.lang.Integer): java.io.FilePermission
    }

  }
}
