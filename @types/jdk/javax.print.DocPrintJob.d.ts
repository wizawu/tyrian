declare namespace javax {
  namespace print {

    interface DocPrintJob {
      getPrintService(): javax.print.PrintService
      getAttributes(): javax.print.attribute.PrintJobAttributeSet
      addPrintJobListener(arg0: javax.print.event.PrintJobListener): void
      removePrintJobListener(arg0: javax.print.event.PrintJobListener): void
      addPrintJobAttributeListener(arg0: javax.print.event.PrintJobAttributeListener, arg1: javax.print.attribute.PrintJobAttributeSet): void
      removePrintJobAttributeListener(arg0: javax.print.event.PrintJobAttributeListener): void
      print(arg0: javax.print.Doc, arg1: javax.print.attribute.PrintRequestAttributeSet): void
    }

  }
}
