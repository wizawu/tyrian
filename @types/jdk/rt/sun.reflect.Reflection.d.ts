declare namespace sun {
    namespace reflect {
class Reflection {
    public constructor()
    public static getCallerClass(): java.lang.Class<any>
    public static getCallerClass(arg0: int): java.lang.Class<any>
    public static getClassAccessFlags(arg0: java.lang.Class<any>): int
    public static quickCheckMemberAccess(arg0: java.lang.Class<any>, arg1: int): boolean
    public static ensureMemberAccess(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Object, arg3: int): void
    public static verifyMemberAccess(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.Object, arg3: int): boolean
    public static registerFieldsToFilter(arg0: java.lang.Class<any>, ...arg1: java.lang.String[]): void
    public static registerMethodsToFilter(arg0: java.lang.Class<any>, ...arg1: java.lang.String[]): void
    public static filterFields(arg0: java.lang.Class<any>, arg1: java.lang.reflect.Field[]): java.lang.reflect.Field[]
    public static filterMethods(arg0: java.lang.Class<any>, arg1: java.lang.reflect.Method[]): java.lang.reflect.Method[]
    public static isCallerSensitive(arg0: java.lang.reflect.Method): boolean
    public static class: java.lang.Class<any>
}

    }
}