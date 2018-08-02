declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class FindProperty {
    public constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: jdk.nashorn.internal.runtime.Property)
    public replaceProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.FindProperty
    public getGetter(arg0: java.lang.Class<any>, arg1: int, arg2: jdk.internal.dynalink.linker.LinkRequest): java.lang.invoke.MethodHandle
    public getSetter(arg0: java.lang.Class<any>, arg1: boolean, arg2: jdk.internal.dynalink.linker.LinkRequest): java.lang.invoke.MethodHandle
    public getOwner(): jdk.nashorn.internal.runtime.ScriptObject
    public getSelf(): jdk.nashorn.internal.runtime.ScriptObject
    public getGetterReceiver(): jdk.nashorn.internal.runtime.ScriptObject
    public getSetterReceiver(): jdk.nashorn.internal.runtime.ScriptObject
    public getProperty(): jdk.nashorn.internal.runtime.Property
    public isInherited(): boolean
    public isSelf(): boolean
    public isScope(): boolean
    public getIntValue(): int
    public getDoubleValue(): double
    public getObjectValue(): java.lang.Object
    public setValue(arg0: int, arg1: boolean): void
    public setValue(arg0: double, arg1: boolean): void
    public setValue(arg0: java.lang.Object, arg1: boolean): void
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}