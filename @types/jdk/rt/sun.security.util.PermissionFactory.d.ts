declare namespace sun {
    namespace security {
        namespace util {
            interface PermissionFactory<T extends java.security.Permission> {
                newPermission(arg0: java.lang.String | string): T
            }
            interface PermissionFactory$$Lambda<T extends java.security.Permission> {
                (arg0: java.lang.String | string): T
            }
        }
    }
}