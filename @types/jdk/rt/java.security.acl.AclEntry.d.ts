declare namespace java {
    namespace security {
        namespace acl {
interface AclEntry extends java.lang.Cloneable {
    setPrincipal(arg0: java.security.Principal): boolean
    getPrincipal(): java.security.Principal
    setNegativePermissions(): void
    isNegative(): boolean
    addPermission(arg0: java.security.acl.Permission): boolean
    removePermission(arg0: java.security.acl.Permission): boolean
    checkPermission(arg0: java.security.acl.Permission): boolean
    permissions(): java.util.Enumeration<java.security.acl.Permission>
    toString(): string
    clone(): java.lang.Object
}

        }
    }
}