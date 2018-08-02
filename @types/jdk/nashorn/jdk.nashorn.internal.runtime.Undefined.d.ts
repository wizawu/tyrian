declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class Undefined extends jdk.nashorn.internal.runtime.DefaultPropertyAccess {
                    public static getUndefined(): jdk.nashorn.internal.runtime.Undefined
                    public static getEmpty(): jdk.nashorn.internal.runtime.Undefined
                    public getClassName(): string
                    public toString(): string
                    public static lookup(arg0: jdk.internal.dynalink.CallSiteDescriptor): jdk.internal.dynalink.linker.GuardedInvocation
                    public get(arg0: java.lang.Object): java.lang.Object
                    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public has(arg0: java.lang.Object): boolean
                    public hasOwnProperty(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}