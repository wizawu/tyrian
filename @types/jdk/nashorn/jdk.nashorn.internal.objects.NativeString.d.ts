declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class NativeString extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.OptimisticBuiltins {
                    public safeToString(): string
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getClassName(): string
                    public getLength(): java.lang.Object
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: java.lang.String | string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public get(arg0: java.lang.Object): java.lang.Object
                    public get(arg0: double): java.lang.Object
                    public get(arg0: int): java.lang.Object
                    public getInt(arg0: java.lang.Object, arg1: int): int
                    public getInt(arg0: double, arg1: int): int
                    public getInt(arg0: int, arg1: int): int
                    public getDouble(arg0: java.lang.Object, arg1: int): double
                    public getDouble(arg0: double, arg1: int): double
                    public getDouble(arg0: int, arg1: int): double
                    public has(arg0: java.lang.Object): boolean
                    public has(arg0: int): boolean
                    public has(arg0: double): boolean
                    public hasOwnProperty(arg0: java.lang.Object): boolean
                    public hasOwnProperty(arg0: int): boolean
                    public hasOwnProperty(arg0: double): boolean
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public getOwnPropertyDescriptor(arg0: java.lang.String | string): java.lang.Object
                    protected getOwnKeys(arg0: boolean, arg1: java.util.Set<java.lang.String>): java.lang.String[]
                    public static length(arg0: java.lang.Object): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, ...arg1: java.lang.Object[]): string
                    public static fromCharCode(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, arg1: int): string
                    public static fromCharCode(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int): java.lang.Object
                    public static fromCharCode(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int, arg4: int): string
                    public static fromCharCode(arg0: java.lang.Object, arg1: double): string
                    public static toString(arg0: java.lang.Object): string
                    public static valueOf(arg0: java.lang.Object): string
                    public static charAt(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static charAt(arg0: java.lang.Object, arg1: double): string
                    public static charAt(arg0: java.lang.Object, arg1: int): string
                    public static charCodeAt(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static charCodeAt(arg0: java.lang.Object, arg1: double): int
                    public static charCodeAt(arg0: java.lang.Object, arg1: long): int
                    public static charCodeAt(arg0: java.lang.Object, arg1: int): int
                    public static concat(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: double): int
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): int
                    public static lastIndexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static localeCompare(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static match(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static replace(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static search(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static slice(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static slice(arg0: java.lang.Object, arg1: int): string
                    public static slice(arg0: java.lang.Object, arg1: double): string
                    public static slice(arg0: java.lang.Object, arg1: int, arg2: int): string
                    public static slice(arg0: java.lang.Object, arg1: double, arg2: double): string
                    public static split(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static substr(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static substring(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): string
                    public static substring(arg0: java.lang.Object, arg1: int): string
                    public static substring(arg0: java.lang.Object, arg1: double): string
                    public static substring(arg0: java.lang.Object, arg1: int, arg2: int): string
                    public static substring(arg0: java.lang.Object, arg1: double, arg2: double): string
                    public static toLowerCase(arg0: java.lang.Object): string
                    public static toLocaleLowerCase(arg0: java.lang.Object): string
                    public static toUpperCase(arg0: java.lang.Object): string
                    public static toLocaleUpperCase(arg0: java.lang.Object): string
                    public static trim(arg0: java.lang.Object): string
                    public static trimLeft(arg0: java.lang.Object): string
                    public static trimRight(arg0: java.lang.Object): string
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: int): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: long): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: double): java.lang.Object
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: boolean): java.lang.Object
                    public static lookupPrimitive(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Object): jdk.internal.dynalink.linker.GuardedInvocation
                    public getLinkLogic(arg0: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>): jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic
                    public hasPerInstanceAssumptions(): boolean
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}