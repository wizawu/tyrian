declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class BreakableStatement extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.BreakableNode {
                    protected breakLabel: jdk.nashorn.internal.codegen.Label
                    protected constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.codegen.Label)
                    protected constructor(arg0: jdk.nashorn.internal.ir.BreakableStatement, arg1: jdk.nashorn.internal.ir.LocalVariableConversion)
                    public isBreakableWithoutLabel(): boolean
                    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
                    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}