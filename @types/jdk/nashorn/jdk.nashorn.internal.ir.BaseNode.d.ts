declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class BaseNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.FunctionCall , jdk.nashorn.internal.ir.Optimistic {
                    protected base: jdk.nashorn.internal.ir.Expression
                    protected type: jdk.nashorn.internal.codegen.types.Type
                    protected programPoint: int
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression, arg3: boolean)
                    protected constructor(arg0: jdk.nashorn.internal.ir.BaseNode, arg1: jdk.nashorn.internal.ir.Expression, arg2: boolean, arg3: jdk.nashorn.internal.codegen.types.Type, arg4: int)
                    public getBase(): jdk.nashorn.internal.ir.Expression
                    public isFunction(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getProgramPoint(): int
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public canBeOptimistic(): boolean
                    public isIndex(): boolean
                    public setIsFunction(): jdk.nashorn.internal.ir.BaseNode
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}