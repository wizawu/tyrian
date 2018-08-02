declare namespace sun {
    namespace misc {
interface JavaSecurityAccess {
    doIntersectionPrivilege<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>, arg1: java.security.AccessControlContext, arg2: java.security.AccessControlContext): T
    doIntersectionPrivilege<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>, arg1: java.security.AccessControlContext): T
}

    }
}