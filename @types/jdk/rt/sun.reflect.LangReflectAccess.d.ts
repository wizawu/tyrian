declare namespace sun {
    namespace reflect {
        interface LangReflectAccess {
            newField(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[]): java.lang.reflect.Field
            newMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>[], arg3: java.lang.Class<any>, arg4: java.lang.Class<any>[], arg5: int, arg6: int, arg7: java.lang.String | string, arg8: byte[], arg9: byte[], arg10: byte[]): java.lang.reflect.Method
            newConstructor<T>(arg0: java.lang.Class<T>, arg1: java.lang.Class<any>[], arg2: java.lang.Class<any>[], arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[], arg7: byte[]): java.lang.reflect.Constructor<T>
            getMethodAccessor<T>(arg0: java.lang.reflect.Method): sun.reflect.MethodAccessor
            setMethodAccessor<T>(arg0: java.lang.reflect.Method, arg1: sun.reflect.MethodAccessor | sun.reflect.MethodAccessor$$Lambda): void
            getConstructorAccessor<T>(arg0: java.lang.reflect.Constructor<any>): sun.reflect.ConstructorAccessor
            setConstructorAccessor<T>(arg0: java.lang.reflect.Constructor<any>, arg1: sun.reflect.ConstructorAccessor | sun.reflect.ConstructorAccessor$$Lambda): void
            getExecutableTypeAnnotationBytes<T>(arg0: java.lang.reflect.Executable): byte[]
            getConstructorSlot<T>(arg0: java.lang.reflect.Constructor<any>): int
            getConstructorSignature<T>(arg0: java.lang.reflect.Constructor<any>): string
            getConstructorAnnotations<T>(arg0: java.lang.reflect.Constructor<any>): byte[]
            getConstructorParameterAnnotations<T>(arg0: java.lang.reflect.Constructor<any>): byte[]
            copyMethod<T>(arg0: java.lang.reflect.Method): java.lang.reflect.Method
            copyField<T>(arg0: java.lang.reflect.Field): java.lang.reflect.Field
            copyConstructor<T>(arg0: java.lang.reflect.Constructor<T>): java.lang.reflect.Constructor<T>
        }
    }
}