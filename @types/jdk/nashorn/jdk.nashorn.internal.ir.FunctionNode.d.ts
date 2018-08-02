declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class FunctionNode extends jdk.nashorn.internal.ir.LexicalContextExpression implements jdk.nashorn.internal.ir.Flags<jdk.nashorn.internal.ir.FunctionNode> , jdk.nashorn.internal.ir.CompileUnitHolder {
                    public static FUNCTION_TYPE: jdk.nashorn.internal.codegen.types.Type
                    public static IS_ANONYMOUS: int
                    public static IS_DECLARED: int
                    public static IS_STRICT: int
                    public static USES_ARGUMENTS: int
                    public static IS_SPLIT: int
                    public static HAS_EVAL: int
                    public static HAS_NESTED_EVAL: int
                    public static HAS_SCOPE_BLOCK: int
                    public static DEFINES_ARGUMENTS: int
                    public static USES_ANCESTOR_SCOPE: int
                    public static HAS_FUNCTION_DECLARATIONS: int
                    public static IS_DEOPTIMIZABLE: int
                    public static HAS_APPLY_TO_CALL_SPECIALIZATION: int
                    public static IS_PROGRAM: int
                    public static USES_SELF_SYMBOL: int
                    public static USES_THIS: int
                    public static IN_DYNAMIC_CONTEXT: int
                    public static IS_PRINT_PARSE: int
                    public static IS_PRINT_LOWER_PARSE: int
                    public static IS_PRINT_AST: int
                    public static IS_PRINT_LOWER_AST: int
                    public static IS_PRINT_SYMBOLS: int
                    public static IS_PROFILE: int
                    public static IS_TRACE_ENTEREXIT: int
                    public static IS_TRACE_MISSES: int
                    public static IS_TRACE_VALUES: int
                    public static NEEDS_CALLEE: int
                    public static IS_CACHED: int
                    public static EXTENSION_CALLSITE_FLAGS: int
                    public static NEEDS_PARENT_SCOPE: int
                    public constructor(arg0: jdk.nashorn.internal.runtime.Source, arg1: int, arg2: long, arg3: int, arg4: long, arg5: jdk.nashorn.internal.codegen.Namespace, arg6: jdk.nashorn.internal.ir.IdentNode, arg7: java.lang.String | string, arg8: java.util.List<jdk.nashorn.internal.ir.IdentNode>, arg9: jdk.nashorn.internal.ir.FunctionNode$Kind, arg10: int)
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public visitParameters(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): java.util.List<jdk.nashorn.internal.ir.IdentNode>
                    public getCallSiteFlags(): int
                    public getSource(): jdk.nashorn.internal.runtime.Source
                    public initializeDeserialized(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.codegen.Namespace): jdk.nashorn.internal.ir.FunctionNode
                    public getId(): int
                    public getSourceName(): string
                    public static getSourceName(arg0: jdk.nashorn.internal.runtime.Source): string
                    public static getDirectiveFlag(arg0: java.lang.String | string): int
                    public getLineNumber(): int
                    public uniqueName(arg0: java.lang.String | string): string
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getFlags(): int
                    public getFlag(arg0: int): boolean
                    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public isProgram(): boolean
                    public canBeDeoptimized(): boolean
                    public hasEval(): boolean
                    public hasNestedEval(): boolean
                    public getFirstToken(): long
                    public hasDeclaredFunctions(): boolean
                    public needsCallee(): boolean
                    public usesThis(): boolean
                    public hasApplyToCallSpecialization(): boolean
                    public getIdent(): jdk.nashorn.internal.ir.IdentNode
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.FunctionNode
                    public isVarArg(): boolean
                    public inDynamicContext(): boolean
                    public needsDynamicScope(): boolean
                    public setInDynamicContext(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.FunctionNode
                    public needsArguments(): boolean
                    public needsParentScope(): boolean
                    public setThisProperties(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.FunctionNode
                    public getThisProperties(): int
                    public hasScopeBlock(): boolean
                    public getKind(): jdk.nashorn.internal.ir.FunctionNode$Kind
                    public getLastToken(): long
                    public setLastToken(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: long): jdk.nashorn.internal.ir.FunctionNode
                    public getEndParserState(): java.lang.Object
                    public setEndParserState(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.lang.Object): jdk.nashorn.internal.ir.FunctionNode
                    public getName(): string
                    public setName(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.lang.String | string): jdk.nashorn.internal.ir.FunctionNode
                    public allVarsInScope(): boolean
                    public isSplit(): boolean
                    public getParameters(): java.util.List<jdk.nashorn.internal.ir.IdentNode>
                    public getNumOfParams(): int
                    public getParameter(arg0: int): jdk.nashorn.internal.ir.IdentNode
                    public setParameters(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.IdentNode>): jdk.nashorn.internal.ir.FunctionNode
                    public isDeclared(): boolean
                    public isAnonymous(): boolean
                    public usesSelfSymbol(): boolean
                    public isNamedFunctionExpression(): boolean
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getWidestOperationType(): jdk.nashorn.internal.codegen.types.Type
                    public getReturnType(): jdk.nashorn.internal.codegen.types.Type
                    public setReturnType(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.FunctionNode
                    public isStrict(): boolean
                    public isCached(): boolean
                    public setCached(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.FunctionNode
                    public getCompileUnit(): jdk.nashorn.internal.codegen.CompileUnit
                    public setCompileUnit(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.codegen.CompileUnit): jdk.nashorn.internal.ir.FunctionNode
                    public compilerConstant(arg0: jdk.nashorn.internal.codegen.CompilerConstants): jdk.nashorn.internal.ir.Symbol
                    public getRootClass(): java.lang.Class<any>
                    public setRootClass(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.lang.Class<any>): jdk.nashorn.internal.ir.FunctionNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): jdk.nashorn.internal.ir.LexicalContextNode
                    public static class: java.lang.Class<any>
                }
                class FunctionNode$$Lambda extends jdk.nashorn.internal.ir.LexicalContextExpression implements jdk.nashorn.internal.ir.Flags<jdk.nashorn.internal.ir.FunctionNode> , jdk.nashorn.internal.ir.CompileUnitHolder {
                    public static FUNCTION_TYPE: jdk.nashorn.internal.codegen.types.Type
                }
            }
        }
    }
}