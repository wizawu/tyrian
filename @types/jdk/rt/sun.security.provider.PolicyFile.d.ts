declare namespace sun {
    namespace security {
        namespace provider {
class PolicyFile extends java.security.Policy {
    public constructor()
    public constructor(arg0: java.net.URL)
    public refresh(): void
    public implies(arg0: java.security.ProtectionDomain, arg1: java.security.Permission): boolean
    public getPermissions(arg0: java.security.ProtectionDomain): java.security.PermissionCollection
    public getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
    protected getSignerCertificates(arg0: java.security.CodeSource): java.security.cert.Certificate[]
    public static class: java.lang.Class<any>
}

        }
    }
}