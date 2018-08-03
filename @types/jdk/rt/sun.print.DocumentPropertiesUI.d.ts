declare namespace sun {
    namespace print {
        abstract class DocumentPropertiesUI {
            public static readonly DOCUMENTPROPERTIES_ROLE: int
            public static readonly DOCPROPERTIESCLASSNAME: string
            public constructor()
            public abstract showDocumentProperties(arg0: java.awt.print.PrinterJob, arg1: java.awt.Window, arg2: javax.print.PrintService, arg3: javax.print.attribute.PrintRequestAttributeSet): javax.print.attribute.PrintRequestAttributeSet
            public static class: java.lang.Class<any>
        }
        interface DocumentPropertiesUI$$Lambda {
            (arg0: java.awt.print.PrinterJob, arg1: java.awt.Window, arg2: javax.print.PrintService, arg3: javax.print.attribute.PrintRequestAttributeSet): javax.print.attribute.PrintRequestAttributeSet
        }
    }
}