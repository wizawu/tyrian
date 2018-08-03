declare namespace javax {
    namespace print {
        interface MultiDocPrintJob extends javax.print.DocPrintJob {
            print(arg0: javax.print.MultiDoc, arg1: javax.print.attribute.PrintRequestAttributeSet): void
        }
        interface MultiDocPrintJob$$Lambda extends javax.print.DocPrintJob {
            (arg0: javax.print.MultiDoc, arg1: javax.print.attribute.PrintRequestAttributeSet): void
        }
    }
}