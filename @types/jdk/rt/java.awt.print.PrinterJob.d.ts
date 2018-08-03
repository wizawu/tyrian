declare namespace java {
    namespace awt {
        namespace print {
            abstract class PrinterJob {
                public static getPrinterJob(): java.awt.print.PrinterJob
                public static lookupPrintServices(): javax.print.PrintService[]
                public static lookupStreamPrintServices(arg0: java.lang.String | string): javax.print.StreamPrintServiceFactory[]
                public constructor()
                public getPrintService(): javax.print.PrintService
                public setPrintService(arg0: javax.print.PrintService): void
                public abstract setPrintable(arg0: java.awt.print.Printable | java.awt.print.Printable$$Lambda): void
                public abstract setPrintable(arg0: java.awt.print.Printable | java.awt.print.Printable$$Lambda, arg1: java.awt.print.PageFormat): void
                public abstract setPageable(arg0: java.awt.print.Pageable): void
                public abstract printDialog(): boolean
                public printDialog(arg0: javax.print.attribute.PrintRequestAttributeSet): boolean
                public abstract pageDialog(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
                public pageDialog(arg0: javax.print.attribute.PrintRequestAttributeSet): java.awt.print.PageFormat
                public abstract defaultPage(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
                public defaultPage(): java.awt.print.PageFormat
                public getPageFormat(arg0: javax.print.attribute.PrintRequestAttributeSet): java.awt.print.PageFormat
                public abstract validatePage(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
                public abstract print(): void
                public print(arg0: javax.print.attribute.PrintRequestAttributeSet): void
                public abstract setCopies(arg0: int): void
                public abstract getCopies(): int
                public abstract getUserName(): string
                public abstract setJobName(arg0: java.lang.String | string): void
                public abstract getJobName(): string
                public abstract cancel(): void
                public abstract isCancelled(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}