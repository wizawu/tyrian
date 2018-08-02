declare namespace sun {
    namespace rmi {
        namespace server {
class LoaderHandler {
    public static loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class<any>
    public static getClassAnnotation(arg0: java.lang.Class<any>): string
    public static getClassLoader(arg0: java.lang.String | string): java.lang.ClassLoader
    public static getSecurityContext(arg0: java.lang.ClassLoader): java.lang.Object
    public static registerCodebaseLoader(arg0: java.lang.ClassLoader): void
    public static loadProxyClass(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.ClassLoader): java.lang.Class<any>
    public static class: java.lang.Class<any>
}

        }
    }
}