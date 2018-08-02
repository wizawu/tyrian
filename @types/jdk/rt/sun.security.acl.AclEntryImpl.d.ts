declare namespace sun {
    namespace security {
        namespace acl {
class AclEntryImpl implements java.security.acl.AclEntry {
    public constructor(arg0: java.security.Principal)
    public constructor()
    public setPrincipal(arg0: java.security.Principal): boolean
    public setNegativePermissions(): void
    public isNegative(): boolean
    public addPermission(arg0: java.security.acl.Permission): boolean
    public removePermission(arg0: java.security.acl.Permission): boolean
    public checkPermission(arg0: java.security.acl.Permission): boolean
    public permissions(): java.util.Enumeration<java.security.acl.Permission>
    public toString(): string
    public clone(): java.lang.Object
    public getPrincipal(): java.security.Principal
    public static class: java.lang.Class<any>
}

        }
    }
}