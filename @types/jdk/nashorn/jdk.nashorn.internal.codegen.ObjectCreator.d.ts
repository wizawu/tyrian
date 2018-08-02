declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class ObjectCreator<T> implements jdk.nashorn.internal.codegen.CodeGenerator$SplitLiteralCreator {
                    protected propertyMap: jdk.nashorn.internal.runtime.PropertyMap
                    public makeObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    protected createObject(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    protected makeMap(): jdk.nashorn.internal.runtime.PropertyMap
                    protected newMapCreator(arg0: java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>): jdk.nashorn.internal.codegen.MapCreator<any>
                    protected loadScope(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    protected loadMap(arg0: jdk.nashorn.internal.codegen.MethodEmitter): jdk.nashorn.internal.codegen.MethodEmitter
                    protected isScope(): boolean
                    protected hasArguments(): boolean
                    protected getAllocatorClass(): java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>
                    protected loadValue(arg0: T, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    public static class: java.lang.Class<any>
                }
                abstract class ObjectCreator$$Lambda<T> implements jdk.nashorn.internal.codegen.CodeGenerator$SplitLiteralCreator {
                    protected propertyMap: jdk.nashorn.internal.runtime.PropertyMap
                }
            }
        }
    }
}