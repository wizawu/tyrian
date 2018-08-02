declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class UserAccessorProperty extends jdk.nashorn.internal.runtime.SpillProperty {
                    public copy(): jdk.nashorn.internal.runtime.Property
                    public copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
                    protected getLocalType(): java.lang.Class<any>
                    public hasGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public hasSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public getIntValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): int
                    public getDoubleValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): double
                    public getObjectValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: double, arg3: boolean): void
                    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.Object, arg3: boolean): void
                    public getGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public getOptimisticGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                    public getGetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public getSetter(arg0: java.lang.Class<any>, arg1: jdk.nashorn.internal.runtime.PropertyMap): java.lang.invoke.MethodHandle
                    public getSetterFunction(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}