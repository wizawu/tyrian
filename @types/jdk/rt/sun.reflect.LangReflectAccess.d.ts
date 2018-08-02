declare namespace sun {
    namespace reflect {
interface LangReflectAccess {
    newField(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[]): java.lang.reflect.Field
    newMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>[], arg3: java.lang.Class<any>, arg4: java.lang.Class<any>[], arg5: int, arg6: int, arg7: java.lang.String | string, arg8: byte[], arg9: byte[], arg10: byte[]): java.lang.reflect.Method
    newConstructor<T>(arg0: java.lang.Class<T>, arg1: java.lang.Class<any>[], arg2: java.lang.Class<any>[], arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[], arg7: byte[]): java.lang.reflect.Constructor<T>
    getMethodAccessor(arg0: java.lang.reflect.Method): sun.reflect.MethodAccessor
    setMethodAccessor(arg0: java.lang.reflect.Method, arg1: sun.reflect.MethodAccessor | sun.reflect.MethodAccessor$$Lambda): void
    getConstructorAccessor(arg0: java.lang.reflect.Constructor<any>): sun.reflect.ConstructorAccessor
    setConstructorAccessor(arg0: java.lang.reflect.Constructor<any>, arg1: sun.reflect.ConstructorAccessor | sun.reflect.ConstructorAccessor$$Lambda): void
    getExecutableTypeAnnotationBytes(arg0: java.lang.reflect.Executable): byte[]
    getConstructorSlot(arg0: java.lang.reflect.Constructor<any>): int
    getConstructorSignature(arg0: java.lang.reflect.Constructor<any>): string
    getConstructorAnnotations(arg0: java.lang.reflect.Constructor<any>): byte[]
    getConstructorParameterAnnotations(arg0: java.lang.reflect.Constructor<any>): byte[]
    copyMethod(arg0: java.lang.reflect.Method): java.lang.reflect.Method
    copyField(arg0: java.lang.reflect.Field): java.lang.reflect.Field
    copyConstructor<T>(arg0: java.lang.reflect.Constructor<T>): java.lang.reflect.Constructor<T>
}

    }
}