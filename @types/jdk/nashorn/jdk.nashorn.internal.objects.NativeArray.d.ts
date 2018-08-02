declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class NativeArray extends jdk.nashorn.internal.runtime.ScriptObject implements jdk.nashorn.internal.runtime.OptimisticBuiltins {
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: java.lang.String | string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public getClassName(): string
                    public getLength(): java.lang.Object
                    public defineOwnProperty(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean): boolean
                    public defineOwnProperty(arg0: int, arg1: java.lang.Object): void
                    public asObjectArray(): java.lang.Object[]
                    public setIsLengthNotWritable(): void
                    public static isArray(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public static length(arg0: java.lang.Object): java.lang.Object
                    public static length(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static getProtoLength(arg0: java.lang.Object): java.lang.Object
                    public static setProtoLength(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static toString(arg0: java.lang.Object): java.lang.Object
                    public static assertNumeric(arg0: java.lang.Object): java.lang.Object
                    public static toLocaleString(arg0: java.lang.Object): string
                    public static construct(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: boolean): java.lang.Object
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: int): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: long): jdk.nashorn.internal.objects.NativeArray
                    public static construct(arg0: boolean, arg1: java.lang.Object, arg2: double): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: int): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: long): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: double): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static concat(arg0: java.lang.Object, ...arg1: java.lang.Object[]): jdk.nashorn.internal.objects.NativeArray
                    public static join(arg0: java.lang.Object, arg1: java.lang.Object): string
                    public static popInt(arg0: java.lang.Object): int
                    public static popDouble(arg0: java.lang.Object): double
                    public static popObject(arg0: java.lang.Object): java.lang.Object
                    public static pop(arg0: java.lang.Object): java.lang.Object
                    public static push(arg0: java.lang.Object, arg1: int): double
                    public static push(arg0: java.lang.Object, arg1: long): double
                    public static push(arg0: java.lang.Object, arg1: double): double
                    public static pushObject(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static push(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static push(arg0: java.lang.Object, arg1: java.lang.Object): double
                    public static reverse(arg0: java.lang.Object): java.lang.Object
                    public static shift(arg0: java.lang.Object): java.lang.Object
                    public static slice(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static sort(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
                    public static splice(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static unshift(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static indexOf(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static lastIndexOf(arg0: java.lang.Object, ...arg1: java.lang.Object[]): double
                    public static every(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static some(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): boolean
                    public static forEach(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static map(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static filter(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeArray
                    public static reduce(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static reduceRight(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public toString(): string
                    public getLinkLogic(arg0: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>): jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic
                    public hasPerInstanceAssumptions(): boolean
                    public static $clinit$(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}