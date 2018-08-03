declare namespace sun {
    namespace print {
        class IPPPrintService implements javax.print.PrintService , sun.print.SunPrinterJobService {
            public static debugPrint: boolean
            public static OP_GET_ATTRIBUTES: string
            public static OP_CUPS_GET_DEFAULT: string
            public static OP_CUPS_GET_PRINTERS: string
            protected static debug_println(arg0: java.lang.String | string): void
            public createPrintJob(): javax.print.DocPrintJob
            public getSupportedAttributeValues(arg0: java.lang.Class<javax.print.attribute.Attribute>, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): java.lang.Object
            public getUnsupportedAttributes(arg0: javax.print.DocFlavor, arg1: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
            public getSupportedDocFlavors(): javax.print.DocFlavor[]
            public isDocFlavorSupported(arg0: javax.print.DocFlavor): boolean
            public findCustomMedia(arg0: javax.print.attribute.standard.MediaSizeName): sun.print.CustomMediaSizeName
            public getSupportedAttributeCategories(): java.lang.Class[]
            public isAttributeCategorySupported(arg0: java.lang.Class<javax.print.attribute.Attribute>): boolean
            public getAttribute<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<T>): T
            public getAttributes(): javax.print.attribute.PrintServiceAttributeSet
            public isIPPSupportedImages(arg0: java.lang.String | string): boolean
            public isAttributeValueSupported(arg0: javax.print.attribute.Attribute, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): boolean
            public getDefaultAttributeValue(arg0: java.lang.Class<javax.print.attribute.Attribute>): java.lang.Object
            public getServiceUIFactory(): javax.print.ServiceUIFactory
            public wakeNotifier(): void
            public addPrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            public removePrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            public getName(): string
            public usesClass(arg0: java.lang.Class): boolean
            public static getIPPConnection(arg0: java.net.URL): java.net.HttpURLConnection
            public isPostscript(): boolean
            public static writeIPPRequest(arg0: java.io.OutputStream, arg1: java.lang.String | string, arg2: sun.print.AttributeClass[]): boolean
            public static readIPPResponse(arg0: java.io.InputStream): java.util.HashMap[]
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
    }
}