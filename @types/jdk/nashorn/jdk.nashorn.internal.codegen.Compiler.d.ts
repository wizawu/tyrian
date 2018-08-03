declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class Compiler implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static SCRIPTS_PACKAGE: string
                    public static OBJECTS_PACKAGE: string
                    public static forInitialCompilation(arg0: jdk.nashorn.internal.runtime.CodeInstaller, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.ErrorManager, arg3: boolean): jdk.nashorn.internal.codegen.Compiler
                    public static forNoInstallerCompilation(arg0: jdk.nashorn.internal.runtime.Context, arg1: jdk.nashorn.internal.runtime.Source, arg2: boolean): jdk.nashorn.internal.codegen.Compiler
                    public static forOnDemandCompilation(arg0: jdk.nashorn.internal.runtime.CodeInstaller, arg1: jdk.nashorn.internal.runtime.Source, arg2: boolean, arg3: jdk.nashorn.internal.runtime.RecompilableScriptFunctionData, arg4: jdk.nashorn.internal.codegen.TypeMap, arg5: java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>, arg6: java.lang.Object, arg7: int[], arg8: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.codegen.Compiler
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getInvalidatedProgramPoints(): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                    public compile(arg0: jdk.nashorn.internal.ir.FunctionNode, arg1: jdk.nashorn.internal.codegen.Compiler$CompilationPhases): jdk.nashorn.internal.ir.FunctionNode
                    public persistClassInfo(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.ir.FunctionNode): void
                    public static updateCompilationId(arg0: int): void
                    public static binaryName(arg0: java.lang.String | string): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}