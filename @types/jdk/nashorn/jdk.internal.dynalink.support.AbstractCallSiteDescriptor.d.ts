declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                abstract class AbstractCallSiteDescriptor implements jdk.internal.dynalink.CallSiteDescriptor {
                    public constructor()
                    public getName(): string
                    public getLookup(): java.lang.invoke.MethodHandles$Lookup
                    public equals(arg0: java.lang.Object): boolean
                    public equals(arg0: jdk.internal.dynalink.CallSiteDescriptor): boolean
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}