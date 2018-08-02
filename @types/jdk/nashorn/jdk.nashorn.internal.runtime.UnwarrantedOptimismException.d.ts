declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class UnwarrantedOptimismException extends java.lang.RuntimeException {
    public static INVALID_PROGRAM_POINT: int
    public static FIRST_PROGRAM_POINT: int
    public constructor(arg0: java.lang.Object, arg1: int)
    public static isValid(arg0: int): boolean
    public constructor(arg0: java.lang.Object, arg1: int, arg2: jdk.nashorn.internal.codegen.types.Type)
    public static createNarrowest(arg0: java.lang.Object, arg1: int): jdk.nashorn.internal.runtime.UnwarrantedOptimismException
    public getReturnValueDestructive(): java.lang.Object
    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
    public hasInvalidProgramPoint(): boolean
    public getProgramPoint(): int
    public hasPrimitiveReturnValue(): boolean
    public getMessage(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}