declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class WithObject extends jdk.nashorn.internal.runtime.Scope {
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public lookup(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findProperty(arg0: java.lang.String | string, arg1: boolean, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.FindProperty
                    protected invokeNoSuchProperty(arg0: java.lang.String | string, arg1: boolean, arg2: int): java.lang.Object
                    public setSplitState(arg0: int): void
                    public getSplitState(): int
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property[]): void
                    public static withFilterExpression(arg0: java.lang.Object): java.lang.Object
                    public static withFilterScope(arg0: java.lang.Object): java.lang.Object
                    public getExpression(): jdk.nashorn.internal.runtime.ScriptObject
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}