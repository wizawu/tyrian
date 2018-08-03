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
                public setPrintable(arg0: java.awt.print.Printable | java.awt.print.Printable$$Lambda): void
                public setPrintable(arg0: java.awt.print.Printable | java.awt.print.Printable$$Lambda, arg1: java.awt.print.PageFormat): void
                public setPageable(arg0: java.awt.print.Pageable): void
                public printDialog(): boolean
                public printDialog(arg0: javax.print.attribute.PrintRequestAttributeSet): boolean
                public pageDialog(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
                public pageDialog(arg0: javax.print.attribute.PrintRequestAttributeSet): java.awt.print.PageFormat
                public defaultPage(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
                public defaultPage(): java.awt.print.PageFormat
                public getPageFormat(arg0: javax.print.attribute.PrintRequestAttributeSet): java.awt.print.PageFormat
                public validatePage(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
                public print(): void
                public print(arg0: javax.print.attribute.PrintRequestAttributeSet): void
                public setCopies(arg0: int): void
                public getCopies(): int
                public getUserName(): string
                public setJobName(arg0: java.lang.String | string): void
                public getJobName(): string
                public cancel(): void
                public isCancelled(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}