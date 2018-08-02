declare namespace java {
    namespace rmi {
        namespace server {
abstract class RMIClassLoaderSpi {
    public constructor()
    public loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class<any>
    public loadProxyClass(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.ClassLoader): java.lang.Class<any>
    public getClassLoader(arg0: java.lang.String | string): java.lang.ClassLoader
    public getClassAnnotation(arg0: java.lang.Class<any>): string
    public static class: java.lang.Class<any>
}

        }
    }
}