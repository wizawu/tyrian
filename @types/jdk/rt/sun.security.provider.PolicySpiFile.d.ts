declare namespace sun {
    namespace security {
        namespace provider {
class PolicySpiFile extends java.security.PolicySpi {
    public constructor(arg0: java.security.Policy$Parameters)
    protected engineGetPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
    protected engineGetPermissions(arg0: java.security.ProtectionDomain): java.security.PermissionCollection
    protected engineImplies(arg0: java.security.ProtectionDomain, arg1: java.security.Permission): boolean
    protected engineRefresh(): void
    public static class: java.lang.Class<any>
}

        }
    }
}