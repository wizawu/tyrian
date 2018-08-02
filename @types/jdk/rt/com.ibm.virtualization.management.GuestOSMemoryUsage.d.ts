declare namespace com {
    namespace ibm {
        namespace virtualization {
            namespace management {
class GuestOSMemoryUsage {
    public constructor()
    public getMemUsed(): long
    public getTimestamp(): long
    public getMaxMemLimit(): long
    public static from(arg0: javax.management.openmbean.CompositeData): com.ibm.virtualization.management.GuestOSMemoryUsage
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}