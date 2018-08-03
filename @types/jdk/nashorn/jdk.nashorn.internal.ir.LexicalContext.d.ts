declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class LexicalContext {
                    public constructor()
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda, arg1: int): void
                    public setBlockNeedsScope(arg0: jdk.nashorn.internal.ir.Block): void
                    public getFlags(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): int
                    public getFunctionBody(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Block
                    public getAllNodes(): java.util.Iterator<jdk.nashorn.internal.ir.LexicalContextNode>
                    public getOutermostFunction(): jdk.nashorn.internal.ir.FunctionNode
                    public push<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: T): T
                    public isEmpty<T extends jdk.nashorn.internal.ir.LexicalContextNode>(): boolean
                    public size<T extends jdk.nashorn.internal.ir.LexicalContextNode>(): int
                    public pop<T extends jdk.nashorn.internal.ir.Node>(arg0: T): T
                    public applyTopFlags<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: T): T
                    public peek<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.LexicalContextNode
                    public contains<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): boolean
                    public replace<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda, arg1: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): jdk.nashorn.internal.ir.LexicalContextNode
                    public getBlocks<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): java.util.Iterator<jdk.nashorn.internal.ir.Block>
                    public getFunctions<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): java.util.Iterator<jdk.nashorn.internal.ir.FunctionNode>
                    public getParentBlock<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.Block
                    public getCurrentBlockLabelNode<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.LabelNode
                    public getAncestorBlocks<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Block): java.util.Iterator<jdk.nashorn.internal.ir.Block>
                    public getBlocks<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Block): java.util.Iterator<jdk.nashorn.internal.ir.Block>
                    public getFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.FunctionNode
                    public getCurrentBlock<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.Block
                    public getCurrentFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.FunctionNode
                    public getDefiningBlock<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.Block
                    public getDefiningFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.FunctionNode
                    public isFunctionBody<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public isSplitBody<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public getParentFunction<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.FunctionNode
                    public getScopeNestingLevelTo<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.LexicalContextNode | jdk.nashorn.internal.ir.LexicalContextNode$$Lambda): int
                    public inLoop<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public getCurrentLoop<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): jdk.nashorn.internal.ir.LoopNode
                    public getBreakable<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: java.lang.String | string): jdk.nashorn.internal.ir.BreakableNode
                    public getContinueTo<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: java.lang.String | string): jdk.nashorn.internal.ir.LoopNode
                    public getInlinedFinally<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: java.lang.String | string): jdk.nashorn.internal.ir.Block
                    public getTryNodeForInlinedFinally<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: java.lang.String | string): jdk.nashorn.internal.ir.TryNode
                    public findLabel<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: java.lang.String | string): jdk.nashorn.internal.ir.LabelNode
                    public isExternalTarget<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(arg0: jdk.nashorn.internal.ir.SplitNode, arg1: jdk.nashorn.internal.ir.BreakableNode): boolean
                    public inUnprotectedSwitchContext<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): boolean
                    public toString<T extends jdk.nashorn.internal.ir.LexicalContextNode & jdk.nashorn.internal.ir.Flags<T>>(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}