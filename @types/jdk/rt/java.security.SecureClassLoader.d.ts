declare namespace java {
    namespace security {
class SecureClassLoader extends java.lang.ClassLoader {
    protected constructor(arg0: java.lang.ClassLoader)
    protected constructor()
    protected defineClass(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int, arg4: java.security.CodeSource): java.lang.Class<any>
    protected defineClass(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer, arg2: java.security.CodeSource): java.lang.Class<any>
    protected getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
    public static class: java.lang.Class<any>
}

    }
}