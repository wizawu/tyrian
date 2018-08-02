declare namespace sun {
    namespace reflect {
        namespace misc {
            class ReflectUtil {
                public static PROXY_PACKAGE: string
                public static forName(arg0: java.lang.String | string): java.lang.Class<any>
                public static newInstance(arg0: java.lang.Class<any>): java.lang.Object
                public static ensureMemberAccess(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Object, arg3: int): void
                public static conservativeCheckMemberAccess(arg0: java.lang.reflect.Member): void
                public static checkPackageAccess(arg0: java.lang.Class<any>): void
                public static checkPackageAccess(arg0: java.lang.String | string): void
                public static isPackageAccessible(arg0: java.lang.Class<any>): boolean
                public static needsPackageAccessCheck(arg0: java.lang.ClassLoader, arg1: java.lang.ClassLoader): boolean
                public static checkProxyPackageAccess(arg0: java.lang.Class<any>): void
                public static checkProxyPackageAccess(arg0: java.lang.ClassLoader, ...arg1: java.lang.Class<any>[]): void
                public static isNonPublicProxyClass(arg0: java.lang.Class<any>): boolean
                public static checkProxyMethod(arg0: java.lang.Object, arg1: java.lang.reflect.Method): void
                public static isVMAnonymousClass(arg0: java.lang.Class<any>): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}