declare namespace java {
  namespace security {
    abstract class PolicySpi {
      public constructor()
      protected abstract engineImplies(arg0: java.security.ProtectionDomain, arg1: java.security.Permission): boolean
      protected engineRefresh(): void
      protected engineGetPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
      protected engineGetPermissions(arg0: java.security.ProtectionDomain): java.security.PermissionCollection
    }
  }
}
