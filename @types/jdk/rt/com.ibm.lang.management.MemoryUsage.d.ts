declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                class MemoryUsage {
                    public constructor()
                    public getTotal(): long
                    public getFree(): long
                    public getSwapTotal(): long
                    public getSwapFree(): long
                    public getCached(): long
                    public getBuffered(): long
                    public getTimestamp(): long
                    public static from(arg0: javax.management.openmbean.CompositeData): com.ibm.lang.management.MemoryUsage
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}