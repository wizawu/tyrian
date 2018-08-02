declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class CallNode extends jdk.nashorn.internal.ir.LexicalContextExpression implements jdk.nashorn.internal.ir.Optimistic {
    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression, arg4: java.util.List<jdk.nashorn.internal.ir.Expression>, arg5: boolean)
    public getLineNumber(): int
    public getType(): jdk.nashorn.internal.codegen.types.Type
    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getArgs(): java.util.List<jdk.nashorn.internal.ir.Expression>
    public setArgs(arg0: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.CallNode
    public getEvalArgs(): jdk.nashorn.internal.ir.CallNode$EvalArgs
    public setEvalArgs(arg0: jdk.nashorn.internal.ir.CallNode$EvalArgs): jdk.nashorn.internal.ir.CallNode
    public isEval(): boolean
    public isApplyToCall(): boolean
    public setIsApplyToCall(): jdk.nashorn.internal.ir.CallNode
    public getFunction(): jdk.nashorn.internal.ir.Expression
    public setFunction(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.CallNode
    public isNew(): boolean
    public getProgramPoint(): int
    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.CallNode
    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
    public canBeOptimistic(): boolean
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
    public static class: java.lang.Class<any>
}

            }
        }
    }
}