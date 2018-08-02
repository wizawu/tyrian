declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class Block extends jdk.nashorn.internal.ir.Node implements jdk.nashorn.internal.ir.BreakableNode , jdk.nashorn.internal.ir.Terminal , jdk.nashorn.internal.ir.Flags<jdk.nashorn.internal.ir.Block> {
    protected statements: java.util.List<jdk.nashorn.internal.ir.Statement>
    protected symbols: java.util.Map<java.lang.String, jdk.nashorn.internal.ir.Symbol>
    protected flags: int
    public static NEEDS_SCOPE: int
    public static IS_TERMINAL: int
    public static IS_GLOBAL_SCOPE: int
    public constructor(arg0: long, arg1: int, ...arg2: jdk.nashorn.internal.ir.Statement[])
    public constructor(arg0: long, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.Statement>)
    public isGlobalScope(): boolean
    public hasSymbols(): boolean
    public replaceSymbols(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.Map<jdk.nashorn.internal.ir.Symbol, jdk.nashorn.internal.ir.Symbol>): jdk.nashorn.internal.ir.Block
    public copyWithNewSymbols(): jdk.nashorn.internal.ir.Block
    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public getSymbols(): java.util.List<jdk.nashorn.internal.ir.Symbol>
    public getExistingSymbol(arg0: java.lang.String | string): jdk.nashorn.internal.ir.Symbol
    public isCatchBlock(): boolean
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public printSymbols(arg0: java.io.PrintWriter): boolean
    public setIsTerminal(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.Block
    public getFlags(): int
    public isTerminal(): boolean
    public getEntryLabel(): jdk.nashorn.internal.codegen.Label
    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.Block
    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
    public getStatements(): java.util.List<jdk.nashorn.internal.ir.Statement>
    public getStatementCount(): int
    public getFirstStatementLineNumber(): int
    public getLastStatement(): jdk.nashorn.internal.ir.Statement
    public setStatements(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Statement>): jdk.nashorn.internal.ir.Block
    public putSymbol(arg0: jdk.nashorn.internal.ir.Symbol): void
    public needsScope(): boolean
    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.Block
    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.Block
    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.Block
    public getFlag(arg0: int): boolean
    public setNeedsScope(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Block
    public nextSlot(): int
    public isBreakableWithoutLabel(): boolean
    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
    public static class: java.lang.Class<any>
}

            }
        }
    }
}