declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
class AclEntry$Builder {
    public build(): java.nio.file.attribute.AclEntry
    public setType(arg0: java.nio.file.attribute.AclEntryType): java.nio.file.attribute.AclEntry$Builder
    public setPrincipal(arg0: java.nio.file.attribute.UserPrincipal): java.nio.file.attribute.AclEntry$Builder
    public setPermissions(arg0: java.util.Set<java.nio.file.attribute.AclEntryPermission>): java.nio.file.attribute.AclEntry$Builder
    public setPermissions(...arg0: java.nio.file.attribute.AclEntryPermission[]): java.nio.file.attribute.AclEntry$Builder
    public setFlags(arg0: java.util.Set<java.nio.file.attribute.AclEntryFlag>): java.nio.file.attribute.AclEntry$Builder
    public setFlags(...arg0: java.nio.file.attribute.AclEntryFlag[]): java.nio.file.attribute.AclEntry$Builder
    public static class: java.lang.Class<any>
}

            }
        }
    }
}