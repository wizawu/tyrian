declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class NativeJSAdapter extends jdk.nashorn.internal.runtime.ScriptObject {
                    public static readonly __get__: string
                    public static readonly __put__: string
                    public static readonly __call__: string
                    public static readonly __new__: string
                    public static readonly __getIds__: string
                    public static readonly __getKeys__: string
                    public static readonly __getValues__: string
                    public static readonly __has__: string
                    public static readonly __delete__: string
                    public static readonly __preventExtensions__: string
                    public static readonly __isExtensible__: string
                    public static readonly __seal__: string
                    public static readonly __isSealed__: string
                    public static readonly __freeze__: string
                    public static readonly __isFrozen__: string
                    public getClassName(): string
                    public getInt(arg0: java.lang.Object, arg1: int): int
                    public getInt(arg0: double, arg1: int): int
                    public getInt(arg0: int, arg1: int): int
                    public getDouble(arg0: java.lang.Object, arg1: int): double
                    public getDouble(arg0: double, arg1: int): double
                    public getDouble(arg0: int, arg1: int): double
                    public get(arg0: java.lang.Object): java.lang.Object
                    public get(arg0: double): java.lang.Object
                    public get(arg0: int): java.lang.Object
                    public set(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: double, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: double, arg1: int, arg2: int): void
                    public set(arg0: double, arg1: double, arg2: int): void
                    public set(arg0: double, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: int, arg1: int, arg2: int): void
                    public set(arg0: int, arg1: double, arg2: int): void
                    public set(arg0: int, arg1: java.lang.Object, arg2: int): void
                    public has(arg0: java.lang.Object): boolean
                    public has(arg0: int): boolean
                    public has(arg0: double): boolean
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public propertyIterator(): java.util.Iterator<java.lang.String>
                    public valueIterator(): java.util.Iterator<java.lang.Object>
                    public preventExtensions(): jdk.nashorn.internal.runtime.ScriptObject
                    public isExtensible(): boolean
                    public seal(): jdk.nashorn.internal.runtime.ScriptObject
                    public isSealed(): boolean
                    public freeze(): jdk.nashorn.internal.runtime.ScriptObject
                    public isFrozen(): boolean
                    public static construct(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeJSAdapter
                    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethodMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: java.lang.String | string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public getAdaptee(): jdk.nashorn.internal.runtime.ScriptObject
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}