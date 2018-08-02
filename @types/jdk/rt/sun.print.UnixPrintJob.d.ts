declare namespace sun {
    namespace print {
class UnixPrintJob implements javax.print.CancelablePrintJob {
    public getPrintService(): javax.print.PrintService
    public getAttributes(): javax.print.attribute.PrintJobAttributeSet
    public addPrintJobListener(arg0: javax.print.event.PrintJobListener): void
    public removePrintJobListener(arg0: javax.print.event.PrintJobListener): void
    public addPrintJobAttributeListener(arg0: javax.print.event.PrintJobAttributeListener | javax.print.event.PrintJobAttributeListener$$Lambda, arg1: javax.print.attribute.PrintJobAttributeSet): void
    public removePrintJobAttributeListener(arg0: javax.print.event.PrintJobAttributeListener | javax.print.event.PrintJobAttributeListener$$Lambda): void
    public print(arg0: javax.print.Doc, arg1: javax.print.attribute.PrintRequestAttributeSet): void
    public printableJob(arg0: java.awt.print.Printable): void
    public pageableJob(arg0: java.awt.print.Pageable): void
    public cancel(): void
    public static class: java.lang.Class<any>
}

    }
}