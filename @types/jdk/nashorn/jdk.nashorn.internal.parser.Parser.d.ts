declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                class Parser extends jdk.nashorn.internal.parser.AbstractParser implements jdk.nashorn.internal.runtime.logging.Loggable {
                    protected lineInfoReceiver: jdk.nashorn.internal.parser.Lexer$LineInfoReceiver
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager, arg3: boolean, arg4: jdk.nashorn.internal.runtime.logging.DebugLogger)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptEnvironment, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager, arg3: boolean, arg4: int, arg5: jdk.nashorn.internal.runtime.logging.DebugLogger)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public setFunctionName(arg0: java.lang.String | string): void
                    public setReparsedFunction(arg0: jdk.nashorn.internal.runtime.RecompilableScriptFunctionData): void
                    public parse(): jdk.nashorn.internal.ir.FunctionNode
                    public parse(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: boolean): jdk.nashorn.internal.ir.FunctionNode
                    public parseFormalParameterList(): java.util.List<jdk.nashorn.internal.ir.IdentNode>
                    public parseFunctionBody(): jdk.nashorn.internal.ir.FunctionNode
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}