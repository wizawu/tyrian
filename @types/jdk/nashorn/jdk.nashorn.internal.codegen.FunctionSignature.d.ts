declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class FunctionSignature {
                    public constructor(arg0: boolean, arg1: boolean, arg2: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg3: java.util.List<jdk.nashorn.internal.ir.Expression>)
                    public constructor(arg0: boolean, arg1: boolean, arg2: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg3: int)
                    public constructor(arg0: jdk.nashorn.internal.ir.FunctionNode)
                    public toString(): string
                    public size(): int
                    public getParamTypes(): jdk.nashorn.internal.codegen.types.Type[]
                    public getMethodType(): java.lang.invoke.MethodType
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}