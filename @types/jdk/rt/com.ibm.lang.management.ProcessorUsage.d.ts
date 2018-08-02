declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
class ProcessorUsage {
    public constructor()
    public getUser(): long
    public getSystem(): long
    public getIdle(): long
    public getWait(): long
    public getBusy(): long
    public getId(): int
    public getOnline(): int
    public getTimestamp(): long
    public static from(arg0: javax.management.openmbean.CompositeData): com.ibm.lang.management.ProcessorUsage
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}