declare namespace java {
    namespace security {
        namespace acl {
            interface Acl extends java.security.acl.Owner {
                setName(arg0: java.security.Principal, arg1: java.lang.String | string): void
                getName(): string
                addEntry(arg0: java.security.Principal, arg1: java.security.acl.AclEntry): boolean
                removeEntry(arg0: java.security.Principal, arg1: java.security.acl.AclEntry): boolean
                getPermissions(arg0: java.security.Principal): java.util.Enumeration<java.security.acl.Permission>
                entries(): java.util.Enumeration<java.security.acl.AclEntry>
                checkPermission(arg0: java.security.Principal, arg1: java.security.acl.Permission): boolean
                toString(): string
            }
        }
    }
}