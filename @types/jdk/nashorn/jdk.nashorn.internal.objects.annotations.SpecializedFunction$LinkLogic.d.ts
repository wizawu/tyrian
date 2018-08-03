declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                namespace annotations {
                    abstract class SpecializedFunction$LinkLogic {
                        public static readonly EMPTY_INSTANCE: jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic
                        public constructor()
                        public static getEmptyLinkLogicClass(): java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>
                        public getRelinkException(): java.lang.Class<java.lang.Throwable>
                        public static isEmpty(arg0: java.lang.Class<jdk.nashorn.internal.objects.annotations.SpecializedFunction$LinkLogic>): boolean
                        public isEmpty(): boolean
                        public abstract canLink(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                        public needsGuard(arg0: java.lang.Object): boolean
                        public needsGuard(arg0: java.lang.Object, ...arg1: java.lang.Object[]): boolean
                        public getGuard(): java.lang.invoke.MethodHandle
                        public checkLinkable(arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                        public static class: java.lang.Class<any>
                    }
                    interface SpecializedFunction$LinkLogic$$Lambda {
                        (arg0: java.lang.Object, arg1: jdk.internal.dynalink.CallSiteDescriptor, arg2: jdk.internal.dynalink.linker.LinkRequest): boolean
                    }
                }
            }
        }
    }
}