declare namespace java {
  namespace security {

    class ProtectionDomain {
      readonly key: java.security.ProtectionDomain$Key
      public constructor(arg0: java.security.CodeSource, arg1: java.security.PermissionCollection)
      public constructor(arg0: java.security.CodeSource, arg1: java.security.PermissionCollection, arg2: java.lang.ClassLoader, arg3: java.security.Principal[])
      public getCodeSource(): java.security.CodeSource
      public getClassLoader(): java.lang.ClassLoader
      public getPrincipals(): java.security.Principal[]
      public getPermissions(): java.security.PermissionCollection
      public staticPermissionsOnly(): boolean
      public implies(arg0: java.security.Permission): boolean
      impliesWithAltFilePerm(arg0: java.security.Permission): boolean
      impliesCreateAccessControlContext(): boolean
      public toString(): java.lang.String
    }

  }
}
