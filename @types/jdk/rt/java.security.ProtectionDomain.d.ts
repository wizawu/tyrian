declare namespace java {
    namespace security {
class ProtectionDomain {
    public constructor(arg0: java.security.CodeSource, arg1: java.security.PermissionCollection)
    public constructor(arg0: java.security.CodeSource, arg1: java.security.PermissionCollection, arg2: java.lang.ClassLoader, arg3: java.security.Principal[])
    public getCodeSource(): java.security.CodeSource
    public getClassLoader(): java.lang.ClassLoader
    public getPrincipals(): java.security.Principal[]
    public getPermissions(): java.security.PermissionCollection
    public implies(arg0: java.security.Permission): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}