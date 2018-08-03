declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class UnaryNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.Assignment<jdk.nashorn.internal.ir.Expression> , jdk.nashorn.internal.ir.Optimistic {
                    public constructor(arg0: long, arg1: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda)
                    public constructor(arg0: long, arg1: int, arg2: int, arg3: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda)
                    public isAssignment(): boolean
                    public isSelfModifying(): boolean
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public getAssignmentDest(): jdk.nashorn.internal.ir.Expression
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.UnaryNode
                    public getAssignmentSource(): jdk.nashorn.internal.ir.Expression
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isLocal(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public toString(arg0: java.lang.StringBuilder, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: boolean): void
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.UnaryNode
                    public getProgramPoint(): int
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.UnaryNode
                    public canBeOptimistic(): boolean
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.ir.UnaryNode
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.Node
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.ir.Optimistic
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}