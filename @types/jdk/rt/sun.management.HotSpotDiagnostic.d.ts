declare namespace sun {
    namespace management {
class HotSpotDiagnostic implements com.sun.management.HotSpotDiagnosticMXBean {
    public constructor()
    public dumpHeap(arg0: java.lang.String | string, arg1: boolean): void
    public getDiagnosticOptions(): java.util.List<com.sun.management.VMOption>
    public getVMOption(arg0: java.lang.String | string): com.sun.management.VMOption
    public setVMOption(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getObjectName(): javax.management.ObjectName
    public static class: java.lang.Class<any>
}

    }
}