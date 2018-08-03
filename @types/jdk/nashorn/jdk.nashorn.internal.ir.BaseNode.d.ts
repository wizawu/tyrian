declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class BaseNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.FunctionCall , jdk.nashorn.internal.ir.Optimistic {
                    protected readonly base: jdk.nashorn.internal.ir.Expression
                    protected readonly type: jdk.nashorn.internal.codegen.types.Type
                    protected readonly programPoint: int
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg3: boolean)
                    protected constructor(arg0: jdk.nashorn.internal.ir.BaseNode | jdk.nashorn.internal.ir.BaseNode$$Lambda, arg1: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg2: boolean, arg3: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg4: int)
                    public getBase(): jdk.nashorn.internal.ir.Expression
                    public isFunction(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getProgramPoint(): int
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public canBeOptimistic(): boolean
                    public isIndex(): boolean
                    public abstract setIsFunction(): jdk.nashorn.internal.ir.BaseNode
                    public static class: java.lang.Class<any>
                }
                interface BaseNode$$Lambda extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.FunctionCall , jdk.nashorn.internal.ir.Optimistic {
                    (): jdk.nashorn.internal.ir.BaseNode
                }
            }
        }
    }
}