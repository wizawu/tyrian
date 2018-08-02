declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class BinaryNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.Assignment<jdk.nashorn.internal.ir.Expression> , jdk.nashorn.internal.ir.Optimistic {
                    public constructor(arg0: long, arg1: jdk.nashorn.internal.ir.Expression, arg2: jdk.nashorn.internal.ir.Expression)
                    public isComparison(): boolean
                    public isRelational(): boolean
                    public isLogical(): boolean
                    public static isLogical(arg0: jdk.nashorn.internal.parser.TokenType): boolean
                    public getWidestOperandType(): jdk.nashorn.internal.codegen.types.Type
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public isAssignment(): boolean
                    public isSelfModifying(): boolean
                    public getAssignmentDest(): jdk.nashorn.internal.ir.Expression
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public getAssignmentSource(): jdk.nashorn.internal.ir.Expression
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isLocal(): boolean
                    public isAlwaysFalse(): boolean
                    public isAlwaysTrue(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public lhs(): jdk.nashorn.internal.ir.Expression
                    public rhs(): jdk.nashorn.internal.ir.Expression
                    public setLHS(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public setRHS(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public setOperands(arg0: jdk.nashorn.internal.ir.Expression, arg1: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.BinaryNode
                    public getProgramPoint(): int
                    public canBeOptimistic(): boolean
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.BinaryNode
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public isOptimisticUndecidedType(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public decideType(): jdk.nashorn.internal.ir.BinaryNode
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.BinaryNode
                    public setAssignmentDest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.Node
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}