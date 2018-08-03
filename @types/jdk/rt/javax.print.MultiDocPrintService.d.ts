declare namespace javax {
    namespace print {
        interface MultiDocPrintService extends javax.print.PrintService {
            createMultiDocPrintJob(): javax.print.MultiDocPrintJob
        }
        interface MultiDocPrintService$$Lambda extends javax.print.PrintService {
            (): javax.print.MultiDocPrintJob
        }
    }
}