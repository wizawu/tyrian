declare namespace javax {
    namespace print {
        namespace event {
class PrintJobEvent extends javax.print.event.PrintEvent {
    public static JOB_CANCELED: int
    public static JOB_COMPLETE: int
    public static JOB_FAILED: int
    public static REQUIRES_ATTENTION: int
    public static NO_MORE_EVENTS: int
    public static DATA_TRANSFER_COMPLETE: int
    public constructor(arg0: javax.print.DocPrintJob, arg1: int)
    public getPrintEventType(): int
    public getPrintJob(): javax.print.DocPrintJob
    public static class: java.lang.Class<any>
}

        }
    }
}