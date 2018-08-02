declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class ScriptFunction extends jdk.nashorn.internal.runtime.ScriptObject {
    public static G$PROTOTYPE: java.lang.invoke.MethodHandle
    public static S$PROTOTYPE: java.lang.invoke.MethodHandle
    public static G$LENGTH: java.lang.invoke.MethodHandle
    public static G$NAME: java.lang.invoke.MethodHandle
    public static INVOKE_SYNC: java.lang.invoke.MethodHandle
    public static GET_SCOPE: jdk.nashorn.internal.codegen.CompilerConstants$Call
    protected allocatorMap: jdk.nashorn.internal.runtime.PropertyMap
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.invoke.MethodHandle, arg2: jdk.nashorn.internal.runtime.Specialization[])
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.invoke.MethodHandle, arg2: jdk.nashorn.internal.runtime.PropertyMap, arg3: jdk.nashorn.internal.runtime.Specialization[])
    public static create(arg0: java.lang.Object[], arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.ScriptFunction
    public static create(arg0: java.lang.Object[], arg1: int): jdk.nashorn.internal.runtime.ScriptFunction
    public static createAnonymous(): jdk.nashorn.internal.runtime.ScriptFunction
    public static createBuiltin(arg0: java.lang.String | string, arg1: java.lang.invoke.MethodHandle, arg2: jdk.nashorn.internal.runtime.Specialization[]): jdk.nashorn.internal.runtime.ScriptFunction
    public static createBuiltin(arg0: java.lang.String | string, arg1: java.lang.invoke.MethodHandle): jdk.nashorn.internal.runtime.ScriptFunction
    public static createStrictBuiltin(arg0: java.lang.String | string, arg1: java.lang.invoke.MethodHandle): jdk.nashorn.internal.runtime.ScriptFunction
    public createBound(arg0: java.lang.Object, arg1: java.lang.Object[]): jdk.nashorn.internal.runtime.ScriptFunction
    public createSynchronized(arg0: java.lang.Object): jdk.nashorn.internal.runtime.ScriptFunction
    public getClassName(): string
    public isInstance(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
    protected getTargetFunction(): jdk.nashorn.internal.runtime.ScriptFunction
    public setArity(arg0: int): void
    public isStrict(): boolean
    public needsWrappedThis(): boolean
    public safeToString(): string
    public toString(): string
    public toSource(): string
    public getPrototype(): java.lang.Object
    public setPrototype(arg0: java.lang.Object): void
    public getBoundInvokeHandle(arg0: java.lang.Object): java.lang.invoke.MethodHandle
    public getName(): string
    public getScope(): jdk.nashorn.internal.runtime.ScriptObject
    public static G$prototype(arg0: java.lang.Object): java.lang.Object
    public static S$prototype(arg0: java.lang.Object, arg1: java.lang.Object): void
    public static G$length(arg0: java.lang.Object): int
    public static G$name(arg0: java.lang.Object): java.lang.Object
    public static getPrototype(arg0: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.ScriptObject
    public static getConstructorCount(): long
    public static getInvokes(): long
    public static getAllocations(): long
    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    protected findCallMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
    public static class: java.lang.Class<any>
}

            }
        }
    }
}