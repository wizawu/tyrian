declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace linker {
class NashornCallSiteDescriptor extends jdk.internal.dynalink.support.AbstractCallSiteDescriptor {
    public static CALLSITE_SCOPE: int
    public static CALLSITE_STRICT: int
    public static CALLSITE_FAST_SCOPE: int
    public static CALLSITE_OPTIMISTIC: int
    public static CALLSITE_APPLY_TO_CALL: int
    public static CALLSITE_DECLARE: int
    public static CALLSITE_PROFILE: int
    public static CALLSITE_TRACE: int
    public static CALLSITE_TRACE_MISSES: int
    public static CALLSITE_TRACE_ENTEREXIT: int
    public static CALLSITE_TRACE_VALUES: int
    public static CALLSITE_PROGRAM_POINT_SHIFT: int
    public static MAX_PROGRAM_POINT_VALUE: int
    public static FLAGS_MASK: int
    public static toString(arg0: int): string
    public static get(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: int): jdk.nashorn.internal.runtime.linker.NashornCallSiteDescriptor
    public getNameTokenCount(): int
    public getNameToken(arg0: int): string
    public getLookup(): java.lang.invoke.MethodHandles$Lookup
    public equals(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
    public getMethodType(): java.lang.invoke.MethodType
    public getOperator(): string
    public getFirstOperator(): string
    public getOperand(): string
    public getFunctionDescription(): string
    public static getFunctionDescription(arg0: jdk.internal.dynalink.CallSiteDescriptor): string
    public getFunctionErrorMessage(arg0: java.lang.Object): string
    public static getFunctionErrorMessage(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Object): string
    public static getFlags(arg0: jdk.internal.dynalink.CallSiteDescriptor): int
    public static isScope(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
    public static isFastScope(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
    public static isStrict(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
    public static isApplyToCall(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
    public static isOptimistic(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
    public static isDeclaration(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
    public static isStrictFlag(arg0: int): boolean
    public static isScopeFlag(arg0: int): boolean
    public static getProgramPoint(arg0: jdk.internal.dynalink.CallSiteDescriptor): int
    public changeMethodType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}