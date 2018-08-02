declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class ObjectClassGenerator implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static PRIMITIVE_FIELD_TYPE: jdk.nashorn.internal.codegen.types.Type
                    public static PACK_DOUBLE: java.lang.invoke.MethodHandle
                    public static UNPACK_DOUBLE: java.lang.invoke.MethodHandle
                    public constructor(arg0: jdk.nashorn.internal.runtime.Context, arg1: boolean)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static pack(arg0: java.lang.Number): long
                    public static getClassName(arg0: int, arg1: boolean): string
                    public static getClassName(arg0: int, arg1: int, arg2: boolean): string
                    public static getFieldCount(arg0: java.lang.Class<any>): int
                    public static getFieldName(arg0: int, arg1: jdk.nashorn.internal.codegen.types.Type): string
                    public generate(arg0: java.lang.String | string): byte[]
                    public generate(arg0: int): byte[]
                    public generate(arg0: int, arg1: int): byte[]
                    public static createGetter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle, arg4: int): java.lang.invoke.MethodHandle
                    public static createSetter(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static createGuardBoxedPrimitiveSetter(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}