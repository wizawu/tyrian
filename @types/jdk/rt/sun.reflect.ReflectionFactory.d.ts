declare namespace sun {
    namespace reflect {
        class ReflectionFactory {
            public static getReflectionFactory(): sun.reflect.ReflectionFactory
            public setLangReflectAccess(arg0: sun.reflect.LangReflectAccess): void
            public newFieldAccessor(arg0: java.lang.reflect.Field, arg1: boolean): sun.reflect.FieldAccessor
            public newMethodAccessor(arg0: java.lang.reflect.Method): sun.reflect.MethodAccessor
            public newConstructorAccessor(arg0: java.lang.reflect.Constructor<any>): sun.reflect.ConstructorAccessor
            public newField(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[]): java.lang.reflect.Field
            public newMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>[], arg3: java.lang.Class<any>, arg4: java.lang.Class<any>[], arg5: int, arg6: int, arg7: java.lang.String | string, arg8: byte[], arg9: byte[], arg10: byte[]): java.lang.reflect.Method
            public newConstructor(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>[], arg2: java.lang.Class<any>[], arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[], arg7: byte[]): java.lang.reflect.Constructor<any>
            public getMethodAccessor(arg0: java.lang.reflect.Method): sun.reflect.MethodAccessor
            public setMethodAccessor(arg0: java.lang.reflect.Method, arg1: sun.reflect.MethodAccessor | sun.reflect.MethodAccessor$$Lambda): void
            public getConstructorAccessor(arg0: java.lang.reflect.Constructor<any>): sun.reflect.ConstructorAccessor
            public setConstructorAccessor(arg0: java.lang.reflect.Constructor<any>, arg1: sun.reflect.ConstructorAccessor | sun.reflect.ConstructorAccessor$$Lambda): void
            public copyMethod(arg0: java.lang.reflect.Method): java.lang.reflect.Method
            public copyField(arg0: java.lang.reflect.Field): java.lang.reflect.Field
            public copyConstructor<T>(arg0: java.lang.reflect.Constructor<T>): java.lang.reflect.Constructor<T>
            public getExecutableTypeAnnotationBytes<T>(arg0: java.lang.reflect.Executable): byte[]
            public newConstructorForSerialization<T>(arg0: java.lang.Class<any>, arg1: java.lang.reflect.Constructor<any>): java.lang.reflect.Constructor<any>
            public newConstructorForSerialization<T>(arg0: java.lang.Class<any>): java.lang.reflect.Constructor<any>
            public newConstructorForExternalization<T>(arg0: java.lang.Class<any>): java.lang.reflect.Constructor<any>
            public readObjectForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public readObjectNoDataForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public writeObjectForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public readResolveForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public writeReplaceForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public hasStaticInitializerForSerialization<T>(arg0: java.lang.Class<any>): boolean
            public newOptionalDataExceptionForSerialization<T>(arg0: boolean): java.io.OptionalDataException
            public static class: java.lang.Class<any>
        }
    }
}