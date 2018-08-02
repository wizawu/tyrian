declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
interface BreakableNode extends jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.JoinPredecessor , jdk.nashorn.internal.ir.Labels {
    ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
    isBreakableWithoutLabel(): boolean
    getBreakLabel(): jdk.nashorn.internal.codegen.Label
}

            }
        }
    }
}