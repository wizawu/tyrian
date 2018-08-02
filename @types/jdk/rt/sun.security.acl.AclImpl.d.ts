declare namespace sun {
    namespace security {
        namespace acl {
class AclImpl extends sun.security.acl.OwnerImpl implements java.security.acl.Acl {
    public constructor(arg0: java.security.Principal, arg1: java.lang.String | string)
    public setName(arg0: java.security.Principal, arg1: java.lang.String | string): void
    public getName(): string
    public addEntry(arg0: java.security.Principal, arg1: java.security.acl.AclEntry): boolean
    public removeEntry(arg0: java.security.Principal, arg1: java.security.acl.AclEntry): boolean
    public getPermissions(arg0: java.security.Principal): java.util.Enumeration<java.security.acl.Permission>
    public checkPermission(arg0: java.security.Principal, arg1: java.security.acl.Permission): boolean
    public entries(): java.util.Enumeration<java.security.acl.AclEntry>
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}