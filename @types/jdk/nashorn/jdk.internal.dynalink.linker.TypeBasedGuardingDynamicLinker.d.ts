declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace linker {
                interface TypeBasedGuardingDynamicLinker extends jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    canLinkType(arg0: java.lang.Class<any>): boolean
                }
                interface TypeBasedGuardingDynamicLinker$$Lambda extends jdk.internal.dynalink.linker.GuardingDynamicLinker {
                    (arg0: java.lang.Class<any>): boolean
                }
            }
        }
    }
}