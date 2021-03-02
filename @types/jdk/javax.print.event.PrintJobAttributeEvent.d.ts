declare namespace javax {
  namespace print {
    namespace event {

      class PrintJobAttributeEvent extends javax.print.event.PrintEvent {
        public constructor(arg0: javax.print.DocPrintJob, arg1: javax.print.attribute.PrintJobAttributeSet)
        public getPrintJob(): javax.print.DocPrintJob
        public getAttributes(): javax.print.attribute.PrintJobAttributeSet
      }

    }
  }
}
