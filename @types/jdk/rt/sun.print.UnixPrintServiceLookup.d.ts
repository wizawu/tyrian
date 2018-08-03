declare namespace sun {
    namespace print {
        class UnixPrintServiceLookup extends javax.print.PrintServiceLookup implements sun.print.BackgroundServiceLookup , java.lang.Runnable {
            public constructor()
            public getPrintServices(): javax.print.PrintService[]
            public refreshServices(): void
            public getPrintServices(arg0: javax.print.DocFlavor, arg1: javax.print.attribute.AttributeSet): javax.print.PrintService[]
            public getMultiDocPrintServices(arg0: javax.print.DocFlavor[], arg1: javax.print.attribute.AttributeSet): javax.print.MultiDocPrintService[]
            public getDefaultPrintService(): javax.print.PrintService
            public getServicesInbackground(arg0: sun.print.BackgroundLookupListener | sun.print.BackgroundLookupListener$$Lambda): void
            public run(): void
            public static class: java.lang.Class<any>
        }
    }
}