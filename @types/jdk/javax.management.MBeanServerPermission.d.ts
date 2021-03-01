declare namespace javax {
  namespace management {

    class MBeanServerPermission extends java.security.BasicPermission {

      mask: int
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      constructor(arg0: int)
      static simplifyMask(arg0: int): int
      static impliedMask(arg0: int): int
      static getCanonicalName(arg0: int): java.lang.String
      public hashCode(): int
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object): boolean
      public newPermissionCollection(): java.security.PermissionCollection
    }

  }
}
