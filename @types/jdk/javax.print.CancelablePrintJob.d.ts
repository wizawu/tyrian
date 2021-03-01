declare namespace javax {
  namespace print {

    interface CancelablePrintJob extends javax.print.DocPrintJob {

      cancel(): void
    }

  }
}
