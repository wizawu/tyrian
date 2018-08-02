declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace beans {
                class BeansLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    public constructor()
                    public static getLinkerForClass(arg0: java.lang.Class<any>): jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker
                    public static isDynamicMethod(arg0: java.lang.Object): boolean
                    public static isDynamicConstructor(arg0: java.lang.Object): boolean
                    public static getConstructorMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string): java.lang.Object
                    public static getReadableInstancePropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getWritableInstancePropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getInstanceMethodNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getReadableStaticPropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getWritableStaticPropertyNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public static getStaticMethodNames(arg0: java.lang.Class<any>): java.util.Collection<java.lang.String>
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
                class BeansLinker$$Lambda implements jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    public constructor()
                }
            }
        }
    }
}