declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class SwitchNode extends jdk.nashorn.internal.ir.BreakableStatement {
    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression, arg4: java.util.List<jdk.nashorn.internal.ir.CaseNode>, arg5: jdk.nashorn.internal.ir.CaseNode | jdk.nashorn.internal.ir.CaseNode$$Lambda)
    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
    public isTerminal(): boolean
    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getDefaultCase(): jdk.nashorn.internal.ir.CaseNode
    public getCases(): java.util.List<jdk.nashorn.internal.ir.CaseNode>
    public setCases(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.CaseNode>): jdk.nashorn.internal.ir.SwitchNode
    public setCases(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.CaseNode>, arg2: jdk.nashorn.internal.ir.CaseNode | jdk.nashorn.internal.ir.CaseNode$$Lambda): jdk.nashorn.internal.ir.SwitchNode
    public getExpression(): jdk.nashorn.internal.ir.Expression
    public setExpression(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.SwitchNode
    public getTag(): jdk.nashorn.internal.ir.Symbol
    public setTag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.SwitchNode
    public isUniqueInteger(): boolean
    public setUniqueInteger(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.SwitchNode
    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
    public getLabels(): java.util.List
    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
    public isBreakableWithoutLabel(): boolean
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
    public static class: java.lang.Class<any>
}

            }
        }
    }
}