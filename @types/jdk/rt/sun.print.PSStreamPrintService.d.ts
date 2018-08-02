declare namespace sun {
    namespace print {
        class PSStreamPrintService extends javax.print.StreamPrintService implements sun.print.SunPrinterJobService {
            public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
            public getOutputFormat(): string
            public getSupportedDocFlavors(): javax.print.DocFlavor[]
            public createPrintJob(): javax.print.DocPrintJob
            public usesClass(arg0: java.lang.Class): boolean
            public getName(): string
            public addPrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            public removePrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            public getAttribute<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<T>): T
            public getAttributes<T extends javax.print.attribute.PrintServiceAttribute>(): javax.print.attribute.PrintServiceAttributeSet
            public isDocFlavorSupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.DocFlavor): boolean
            public getSupportedAttributeCategories<T extends javax.print.attribute.PrintServiceAttribute>(): java.lang.Class<any>[]
            public isAttributeCategorySupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>): boolean
            public getDefaultAttributeValue<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>): java.lang.Object
            public getSupportedAttributeValues<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): java.lang.Object
            public isAttributeValueSupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.attribute.Attribute, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): boolean
            public getUnsupportedAttributes<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.DocFlavor, arg1: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
            public getServiceUIFactory<T extends javax.print.attribute.PrintServiceAttribute>(): javax.print.ServiceUIFactory
            public toString<T extends javax.print.attribute.PrintServiceAttribute>(): string
            public equals<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Object): boolean
            public hashCode<T extends javax.print.attribute.PrintServiceAttribute>(): int
            public static class: java.lang.Class<any>
        }
        class PSStreamPrintService$$Lambda extends javax.print.StreamPrintService implements sun.print.SunPrinterJobService {
            public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
        }
    }
}