declare namespace java {
  namespace security {

    class ProtectionDomain {

      readonly key: java.security.ProtectionDomain$Key
      public constructor(arg0: java.security.CodeSource, arg1: java.security.PermissionCollection)
      public constructor(arg0: java.security.CodeSource, arg1: java.security.PermissionCollection, arg2: java.lang.ClassLoader, arg3: java.security.Principal[])
      public readonly getCodeSource(): java.security.CodeSource
      public readonly getClassLoader(): java.lang.ClassLoader
      public readonly getPrincipals(): java.security.Principal[]
      public readonly getPermissions(): java.security.PermissionCollection
      public readonly staticPermissionsOnly(): boolean
      public implies(arg0: java.security.Permission): boolean
      impliesWithAltFilePerm(arg0: java.security.Permission): boolean
      impliesCreateAccessControlContext(): boolean
      public toString(): java.lang.String
    }

  }
}
