declare namespace jdk {
    namespace internal {
        namespace dynalink {
interface GuardedInvocationFilter {
    filter(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
}

interface GuardedInvocationFilter$$Lambda {
    (arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
}

        }
    }
}