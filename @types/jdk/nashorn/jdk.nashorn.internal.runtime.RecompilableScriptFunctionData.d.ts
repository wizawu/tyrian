declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class RecompilableScriptFunctionData extends jdk.nashorn.internal.runtime.ScriptFunctionData implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static readonly RECOMPILATION_PREFIX: string
                    public constructor(arg0: jdk.nashorn.internal.ir.FunctionNode, arg1: jdk.nashorn.internal.runtime.CodeInstaller, arg2: jdk.nashorn.internal.runtime.AllocationStrategy, arg3: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.RecompilableScriptFunctionData>, arg4: java.util.Map<java.lang.String, java.lang.Integer>, arg5: java.util.Set<java.lang.String>)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public hasInternalSymbol(arg0: java.lang.String | string): boolean
                    public getExternalSymbolDepth(arg0: java.lang.String | string): int
                    public getExternalSymbolNames(): java.util.Set<java.lang.String>
                    public getEndParserState(): java.lang.Object
                    public getParent(): jdk.nashorn.internal.runtime.RecompilableScriptFunctionData
                    public initTransients(arg0: jdk.nashorn.internal.runtime.Source, arg1: jdk.nashorn.internal.runtime.CodeInstaller): void
                    public toString(): string
                    public toStringVerbose(): string
                    public getFunctionName(): string
                    public inDynamicContext(): boolean
                    public setCachedAst(arg0: jdk.nashorn.internal.ir.FunctionNode): void
                    public initializeCode(arg0: jdk.nashorn.internal.ir.FunctionNode): void
                    public getReturnType(arg0: java.lang.invoke.MethodType, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Class<any>
                    public needsCallee(): boolean
                    public getFunctionFlags(): int
                    public getFunctionNodeId(): int
                    public getSource(): jdk.nashorn.internal.runtime.Source
                    public getScriptFunctionData(arg0: int): jdk.nashorn.internal.runtime.RecompilableScriptFunctionData
                    public isGlobalSymbol(arg0: jdk.nashorn.internal.ir.FunctionNode, arg1: java.lang.String | string): boolean
                    public restoreFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.FunctionNode
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}