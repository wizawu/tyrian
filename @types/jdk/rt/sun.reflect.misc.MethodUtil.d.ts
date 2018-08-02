declare namespace sun {
    namespace reflect {
        namespace misc {
class MethodUtil extends java.security.SecureClassLoader {
    public static getMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>[]): java.lang.reflect.Method
    public static getMethods(arg0: java.lang.Class<any>): java.lang.reflect.Method[]
    public static getPublicMethods(arg0: java.lang.Class<any>): java.lang.reflect.Method[]
    public static invoke(arg0: java.lang.reflect.Method, arg1: java.lang.Object, arg2: java.lang.Object[]): java.lang.Object
    protected loadClass(arg0: java.lang.String | string, arg1: boolean): java.lang.Class<any>
    protected findClass(arg0: java.lang.String | string): java.lang.Class<any>
    protected getPermissions(arg0: java.security.CodeSource): java.security.PermissionCollection
    public static class: java.lang.Class<any>
}

        }
    }
}