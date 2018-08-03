declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                abstract class ScriptFunctionData implements java.io.Serializable {
                    protected readonly name: string
                    protected code: java.util.LinkedList<jdk.nashorn.internal.runtime.CompiledFunction>
                    protected flags: int
                    public static readonly IS_STRICT: int
                    public static readonly IS_BUILTIN: int
                    public static readonly IS_CONSTRUCTOR: int
                    public static readonly NEEDS_CALLEE: int
                    public static readonly USES_THIS: int
                    public static readonly IS_VARIABLE_ARITY: int
                    public static readonly IS_PROPERTY_ACCESSOR: int
                    public static readonly IS_STRICT_OR_BUILTIN: int
                    public static readonly IS_BUILTIN_CONSTRUCTOR: int
                    public isStrict(): boolean
                    protected getFunctionName(): string
                    public toString(): string
                    public toStringVerbose(): string
                    protected ensureCompiled(): void
                    protected static needsCallee(arg0: java.lang.invoke.MethodHandle): boolean
                    protected static isVarArg(arg0: java.lang.invoke.MethodHandle): boolean
                    public inDynamicContext(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}