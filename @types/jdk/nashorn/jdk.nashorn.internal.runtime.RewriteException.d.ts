declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class RewriteException extends java.lang.Exception {
                    public static readonly GET_BYTECODE_SLOTS: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly GET_PROGRAM_POINT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly GET_RETURN_VALUE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly BOOTSTRAP: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_LONG_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_DOUBLE_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly TO_OBJECT_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly INSTANCE_OR_NULL: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static readonly ASSERT_ARRAY_LENGTH: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static create(arg0: jdk.nashorn.internal.runtime.UnwarrantedOptimismException, arg1: java.lang.Object[], arg2: java.lang.String[]): jdk.nashorn.internal.runtime.RewriteException
                    public static create(arg0: jdk.nashorn.internal.runtime.UnwarrantedOptimismException, arg1: java.lang.Object[], arg2: java.lang.String[], arg3: int[]): jdk.nashorn.internal.runtime.RewriteException
                    public static populateArrayBootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: int): java.lang.invoke.CallSite
                    public static populateArray(arg0: java.lang.Object[], arg1: int, arg2: java.lang.Object[]): java.lang.Object[]
                    public static toLongArray(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.RewriteException): long[]
                    public static toDoubleArray(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.RewriteException): double[]
                    public static toObjectArray(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.RewriteException): java.lang.Object[]
                    public static instanceOrNull(arg0: java.lang.Object, arg1: java.lang.Class<any>): java.lang.Object
                    public static assertArrayLength(arg0: java.lang.Object[], arg1: int): void
                    public getReturnValueDestructive(): java.lang.Object
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public getProgramPoint(): int
                    public getByteCodeSlots(): java.lang.Object[]
                    public getPreviousContinuationEntryPoints(): int[]
                    public getRuntimeScope(): jdk.nashorn.internal.runtime.ScriptObject
                    public getMessage(): string
                    public getMessageShort(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}