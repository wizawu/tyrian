declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class VarNode extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.Assignment<jdk.nashorn.internal.ir.IdentNode> {
    public static IS_LET: int
    public static IS_CONST: int
    public static IS_LAST_FUNCTION_DECLARATION: int
    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.IdentNode, arg4: jdk.nashorn.internal.ir.Expression)
    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.IdentNode, arg4: jdk.nashorn.internal.ir.Expression, arg5: int)
    public isAssignment(): boolean
    public getAssignmentDest(): jdk.nashorn.internal.ir.IdentNode
    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.VarNode
    public getAssignmentSource(): jdk.nashorn.internal.ir.Expression
    public isBlockScoped(): boolean
    public isLet(): boolean
    public isConst(): boolean
    public getSymbolFlags(): int
    public hasInit(): boolean
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getInit(): jdk.nashorn.internal.ir.Expression
    public setInit(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.VarNode
    public getName(): jdk.nashorn.internal.ir.IdentNode
    public setName(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.VarNode
    public getFlag(arg0: int): boolean
    public setFlag(arg0: int): jdk.nashorn.internal.ir.VarNode
    public isFunctionDeclaration(): boolean
    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.Node
    public getAssignmentDest(): jdk.nashorn.internal.ir.Expression
    public static class: java.lang.Class<any>
}

            }
        }
    }
}