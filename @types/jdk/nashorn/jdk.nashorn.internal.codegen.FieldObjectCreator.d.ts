declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class FieldObjectCreator<T> extends jdk.nashorn.internal.codegen.ObjectCreator<T> {
                    public createObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public populateRange(arg0: jdk.nashorn.internal.codegen.MethodEmitter, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: int, arg3: int, arg4: int): void
                    protected makeMap(): jdk.nashorn.internal.runtime.PropertyMap
                    protected getAllocatorClass(): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}