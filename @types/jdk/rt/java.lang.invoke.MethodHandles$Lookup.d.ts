declare namespace java {
    namespace lang {
        namespace invoke {
            class MethodHandles$Lookup {
                public static readonly PUBLIC: int
                public static readonly PRIVATE: int
                public static readonly PROTECTED: int
                public static readonly PACKAGE: int
                public lookupModes(): int
                public bind(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public findSpecial(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public findStatic(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public findVirtual(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public findGetter(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public findStaticGetter(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public findSetter(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public findStaticSetter(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public in(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandles$Lookup
                public lookupClass(): java.lang.Class<any>
                public unreflect(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                public unreflectConstructor(arg0: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle
                public findConstructor(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public unreflectSpecial(arg0: java.lang.reflect.Method, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public unreflectGetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                public unreflectSetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                public revealDirect(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandleInfo
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}