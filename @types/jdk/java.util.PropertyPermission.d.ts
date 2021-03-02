declare namespace java {
  namespace util {

    class PropertyPermission extends java.security.BasicPermission {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      static getActions(arg0: number | java.lang.Integer): java.lang.String
      public getActions(): java.lang.String
      getMask(): number
      public newPermissionCollection(): java.security.PermissionCollection
    }

  }
}
