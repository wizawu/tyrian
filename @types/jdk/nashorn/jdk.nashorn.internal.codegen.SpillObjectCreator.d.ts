declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class SpillObjectCreator extends jdk.nashorn.internal.codegen.ObjectCreator<jdk.nashorn.internal.ir.Expression> {
                    public createObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public populateRange(arg0: jdk.nashorn.internal.codegen.MethodEmitter, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg2: int, arg3: int, arg4: int): void
                    protected makeMap(): jdk.nashorn.internal.runtime.PropertyMap
                    protected loadValue(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): void
                    protected getAllocatorClass(): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
                    protected loadValue(arg0: java.lang.Object, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}