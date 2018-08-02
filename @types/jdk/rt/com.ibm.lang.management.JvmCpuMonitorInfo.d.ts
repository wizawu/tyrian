declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                class JvmCpuMonitorInfo {
                    public constructor()
                    public getTimestamp(): long
                    public getApplicationCpuTime(): long
                    public getResourceMonitorCpuTime(): long
                    public getSystemJvmCpuTime(): long
                    public getGcCpuTime(): long
                    public getJitCpuTime(): long
                    public getApplicationUserCpuTime(): long[]
                    public static from(arg0: javax.management.openmbean.CompositeData): com.ibm.lang.management.JvmCpuMonitorInfo
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}