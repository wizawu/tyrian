declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
class CallSiteDescriptorFactory {
    public static create(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): jdk.internal.dynalink.CallSiteDescriptor
    protected static createReference(arg0: jdk.internal.dynalink.CallSiteDescriptor): java.lang.ref.Reference<jdk.internal.dynalink.CallSiteDescriptor>
    public static tokenizeName(arg0: java.lang.String | string): java.lang.String[]
    public static tokenizeOperators(arg0: jdk.internal.dynalink.CallSiteDescriptor): java.util.List<java.lang.String>
    public static dropParameterTypes(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, arg2: int): jdk.internal.dynalink.CallSiteDescriptor
    public static changeParameterType(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, arg2: java.lang.Class<any>): jdk.internal.dynalink.CallSiteDescriptor
    public static changeReturnType(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: java.lang.Class<any>): jdk.internal.dynalink.CallSiteDescriptor
    public static insertParameterTypes(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, ...arg2: java.lang.Class<any>[]): jdk.internal.dynalink.CallSiteDescriptor
    public static insertParameterTypes(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: int, arg2: java.util.List<java.lang.Class<any>>): jdk.internal.dynalink.CallSiteDescriptor
    public static class: java.lang.Class<any>
}

            }
        }
    }
}