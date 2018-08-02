declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class AccessorProperty extends jdk.nashorn.internal.runtime.Property {
    public static create(arg0: java.lang.String | string, arg1: int, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle): jdk.nashorn.internal.runtime.AccessorProperty
    protected constructor(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.lang.invoke.MethodHandle, arg4: java.lang.invoke.MethodHandle, arg5: java.lang.invoke.MethodHandle, arg6: java.lang.invoke.MethodHandle)
    public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Class<any>, arg3: int)
    protected constructor(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: jdk.nashorn.internal.runtime.ScriptObject, arg4: java.lang.Object)
    public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Class<any>, arg3: int, arg4: java.lang.Class<any>)
    protected constructor(arg0: jdk.nashorn.internal.runtime.AccessorProperty, arg1: java.lang.Class<any>)
    protected constructor(arg0: jdk.nashorn.internal.runtime.AccessorProperty)
    protected setInitialValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Object): void
    protected initializeType(): void
    public copy(): jdk.nashorn.internal.runtime.Property
    public copy(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.Property
    public getIntValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): int
    public getDoubleValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): double
    public getObjectValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
    protected invokeSetter(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: int): void
    protected invokeSetter(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: double): void
    protected invokeSetter(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: java.lang.Object): void
    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: int, arg3: boolean): void
    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: double, arg3: boolean): void
    public setValue(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: java.lang.Object, arg3: boolean): void
    public getGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public getOptimisticGetter(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
    protected isUndefined(): boolean
    public getSetter(arg0: java.lang.Class<any>, arg1: jdk.nashorn.internal.runtime.PropertyMap): java.lang.invoke.MethodHandle
    public canChangeType(): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}