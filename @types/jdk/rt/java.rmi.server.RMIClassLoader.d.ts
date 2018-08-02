declare namespace java {
    namespace rmi {
        namespace server {
            class RMIClassLoader {
                public static loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                public static loadClass(arg0: java.net.URL, arg1: java.lang.String | string): java.lang.Class<any>
                public static loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Class<any>
                public static loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class<any>
                public static loadProxyClass(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.ClassLoader): java.lang.Class<any>
                public static getClassLoader(arg0: java.lang.String | string): java.lang.ClassLoader
                public static getClassAnnotation(arg0: java.lang.Class<any>): string
                public static getDefaultProviderInstance(): java.rmi.server.RMIClassLoaderSpi
                public static getSecurityContext(arg0: java.lang.ClassLoader): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}