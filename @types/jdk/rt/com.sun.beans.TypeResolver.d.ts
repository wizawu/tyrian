declare namespace com {
    namespace sun {
        namespace beans {
            class TypeResolver {
                public constructor()
                public static resolveInClass(arg0: java.lang.Class<any>, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.reflect.Type
                public static resolveInClass(arg0: java.lang.Class<any>, arg1: java.lang.reflect.Type[]): java.lang.reflect.Type[]
                public static resolve(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.reflect.Type
                public static resolve(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.reflect.Type[]): java.lang.reflect.Type[]
                public static erase(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.Class<any>
                public static erase(arg0: java.lang.reflect.Type[]): java.lang.Class[]
                public static class: java.lang.Class<any>
            }
        }
    }
}