declare namespace sun {
    namespace print {
        class UnixPrintService implements javax.print.PrintService , sun.print.AttributeUpdater , sun.print.SunPrinterJobService {
            public invalidateService(): void
            public getName(): string
            protected static filterPrinterNamesAIX(arg0: java.lang.String[]): java.lang.String[]
            public createPrintJob(): javax.print.DocPrintJob
            public getUpdatedAttributes(): javax.print.attribute.PrintServiceAttributeSet
            public wakeNotifier(): void
            public addPrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            public removePrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            public getAttribute<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<T>): T
            public getAttributes<T extends javax.print.attribute.PrintServiceAttribute>(): javax.print.attribute.PrintServiceAttributeSet
            public getSupportedDocFlavors<T extends javax.print.attribute.PrintServiceAttribute>(): javax.print.DocFlavor[]
            public isDocFlavorSupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.DocFlavor): boolean
            public getSupportedAttributeCategories<T extends javax.print.attribute.PrintServiceAttribute>(): java.lang.Class[]
            public isAttributeCategorySupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>): boolean
            public getDefaultAttributeValue<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>): java.lang.Object
            public getSupportedAttributeValues<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): java.lang.Object
            public isAttributeValueSupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.attribute.Attribute, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): boolean
            public getUnsupportedAttributes<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.DocFlavor, arg1: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
            public getServiceUIFactory<T extends javax.print.attribute.PrintServiceAttribute>(): javax.print.ServiceUIFactory
            public toString<T extends javax.print.attribute.PrintServiceAttribute>(): string
            public equals<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Object): boolean
            public hashCode<T extends javax.print.attribute.PrintServiceAttribute>(): int
            public usesClass<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class): boolean
            public static class: java.lang.Class<any>
        }
        class UnixPrintService$$Lambda implements javax.print.PrintService , sun.print.AttributeUpdater , sun.print.SunPrinterJobService {
            public (): void
        }
    }
}