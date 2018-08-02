declare namespace com {
    namespace ibm {
        namespace virtualization {
            namespace management {
                class GuestOSProcessorUsage {
                    public constructor()
                    public getCpuTime(): long
                    public getHostCpuClockSpeed(): long
                    public getTimestamp(): long
                    public getCpuEntitlement(): float
                    public static from(arg0: javax.management.openmbean.CompositeData): com.ibm.virtualization.management.GuestOSProcessorUsage
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}