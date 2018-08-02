declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
class NativeNumber extends jdk.nashorn.internal.runtime.ScriptObject {
    public static MAX_VALUE: double
    public static MIN_VALUE: double
    public static NaN: double
    public static NEGATIVE_INFINITY: double
    public static POSITIVE_INFINITY: double
    public safeToString(): string
    public toString(): string
    public getValue(): double
    public doubleValue(): double
    public getClassName(): string
    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): java.lang.Object
    public static toFixed(arg0: java.lang.Object, arg1: java.lang.Object): string
    public static toFixed(arg0: java.lang.Object, arg1: int): string
    public static toExponential(arg0: java.lang.Object, arg1: java.lang.Object): string
    public static toPrecision(arg0: java.lang.Object, arg1: java.lang.Object): string
    public static toPrecision(arg0: java.lang.Object, arg1: int): string
    public static toString(arg0: java.lang.Object, arg1: java.lang.Object): string
    public static toLocaleString(arg0: java.lang.Object): string
    public static valueOf(arg0: java.lang.Object): double
    public static lookupPrimitive(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: java.lang.Object): jdk.internal.dynalink.linker.GuardedInvocation
    public static $clinit$(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}