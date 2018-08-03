declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class Expression extends jdk.nashorn.internal.ir.Node {
                    protected constructor(arg0: long, arg1: int, arg2: int)
                    public abstract getType(): jdk.nashorn.internal.codegen.types.Type
                    public isLocal(): boolean
                    public isSelfModifying(): boolean
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public isOptimistic(): boolean
                    public isAlwaysFalse(): boolean
                    public isAlwaysTrue(): boolean
                    public static isAlwaysFalse(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): boolean
                    public static isAlwaysTrue(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): boolean
                    public static class: java.lang.Class<any>
                }
                interface Expression$$Lambda extends jdk.nashorn.internal.ir.Node {
                    (): jdk.nashorn.internal.codegen.types.Type
                }
            }
        }
    }
}