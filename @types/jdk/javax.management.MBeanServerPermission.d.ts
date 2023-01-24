declare namespace javax {
  namespace management {
    class MBeanServerPermission extends java.security.BasicPermission {
      mask: int
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      constructor(arg0: number | java.lang.Integer)
      static simplifyMask(arg0: number | java.lang.Integer): number
      static impliedMask(arg0: number | java.lang.Integer): number
      static getCanonicalName(arg0: number | java.lang.Integer): java.lang.String
      public hashCode(): number
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public newPermissionCollection(): java.security.PermissionCollection
    }
  }
}
