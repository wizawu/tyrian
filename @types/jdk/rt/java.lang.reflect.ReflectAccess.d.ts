declare namespace java {
    namespace lang {
        namespace reflect {
class ReflectAccess implements sun.reflect.LangReflectAccess {
    public newField(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[]): java.lang.reflect.Field
    public newMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>[], arg3: java.lang.Class<any>, arg4: java.lang.Class<any>[], arg5: int, arg6: int, arg7: java.lang.String | string, arg8: byte[], arg9: byte[], arg10: byte[]): java.lang.reflect.Method
    public newConstructor<T>(arg0: java.lang.Class<T>, arg1: java.lang.Class<any>[], arg2: java.lang.Class<any>[], arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[], arg7: byte[]): java.lang.reflect.Constructor<T>
    public getMethodAccessor<T>(arg0: java.lang.reflect.Method): sun.reflect.MethodAccessor
    public setMethodAccessor<T>(arg0: java.lang.reflect.Method, arg1: sun.reflect.MethodAccessor | sun.reflect.MethodAccessor$$Lambda): void
    public getConstructorAccessor<T>(arg0: java.lang.reflect.Constructor<any>): sun.reflect.ConstructorAccessor
    public setConstructorAccessor<T>(arg0: java.lang.reflect.Constructor<any>, arg1: sun.reflect.ConstructorAccessor | sun.reflect.ConstructorAccessor$$Lambda): void
    public getConstructorSlot<T>(arg0: java.lang.reflect.Constructor<any>): int
    public getConstructorSignature<T>(arg0: java.lang.reflect.Constructor<any>): string
    public getConstructorAnnotations<T>(arg0: java.lang.reflect.Constructor<any>): byte[]
    public getConstructorParameterAnnotations<T>(arg0: java.lang.reflect.Constructor<any>): byte[]
    public getExecutableTypeAnnotationBytes<T>(arg0: java.lang.reflect.Executable): byte[]
    public copyMethod<T>(arg0: java.lang.reflect.Method): java.lang.reflect.Method
    public copyField<T>(arg0: java.lang.reflect.Field): java.lang.reflect.Field
    public copyConstructor<T>(arg0: java.lang.reflect.Constructor<T>): java.lang.reflect.Constructor<T>
    public static class: java.lang.Class<any>
}

        }
    }
}