declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class Scope extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static GET_SPLIT_STATE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_SPLIT_STATE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: long[], arg2: java.lang.Object[])
                    public isScope(): boolean
                    public getSplitState(): int
                    public setSplitState(arg0: int): void
                    public static getScopeCount(): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}