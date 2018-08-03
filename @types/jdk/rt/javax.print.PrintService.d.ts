declare namespace javax {
    namespace print {
        interface PrintService {
            getName(): string
            createPrintJob(): javax.print.DocPrintJob
            addPrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            removePrintServiceAttributeListener(arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$Lambda): void
            getAttributes(): javax.print.attribute.PrintServiceAttributeSet
            getAttribute<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<T>): T
            getSupportedDocFlavors<T extends javax.print.attribute.PrintServiceAttribute>(): javax.print.DocFlavor[]
            isDocFlavorSupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.DocFlavor): boolean
            getSupportedAttributeCategories<T extends javax.print.attribute.PrintServiceAttribute>(): java.lang.Class<any>[]
            isAttributeCategorySupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>): boolean
            getDefaultAttributeValue<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>): java.lang.Object
            getSupportedAttributeValues<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<javax.print.attribute.Attribute>, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): java.lang.Object
            isAttributeValueSupported<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.attribute.Attribute, arg1: javax.print.DocFlavor, arg2: javax.print.attribute.AttributeSet): boolean
            getUnsupportedAttributes<T extends javax.print.attribute.PrintServiceAttribute>(arg0: javax.print.DocFlavor, arg1: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
            getServiceUIFactory<T extends javax.print.attribute.PrintServiceAttribute>(): javax.print.ServiceUIFactory
            equals<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Object): boolean
            hashCode<T extends javax.print.attribute.PrintServiceAttribute>(): int
        }
    }
}