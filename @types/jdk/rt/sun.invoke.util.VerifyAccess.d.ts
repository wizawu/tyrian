declare namespace sun {
    namespace invoke {
        namespace util {
            class VerifyAccess {
                public static isMemberAccessible(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: int, arg3: java.lang.Class<any>, arg4: int): boolean
                public static isClassAccessible(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: int): boolean
                public static isTypeVisible(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                public static isTypeVisible(arg0: java.lang.invoke.MethodType, arg1: java.lang.Class<any>): boolean
                public static isSamePackage(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                public static getPackageName(arg0: java.lang.Class<any>): string
                public static isSamePackageMember(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                public static classLoaderIsAncestor(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}