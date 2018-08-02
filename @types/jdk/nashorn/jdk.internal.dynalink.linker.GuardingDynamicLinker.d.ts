declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace linker {
                interface GuardingDynamicLinker {
                    getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                }
                interface GuardingDynamicLinker$$Lambda {
                    (arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                }
            }
        }
    }
}