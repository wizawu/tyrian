declare namespace javax {
  namespace print {
    namespace event {
      abstract class PrintJobAdapter implements javax.print.event.PrintJobListener {
        public constructor()
        public printDataTransferCompleted(arg0: javax.print.event.PrintJobEvent): void
        public printJobCompleted(arg0: javax.print.event.PrintJobEvent): void
        public printJobFailed(arg0: javax.print.event.PrintJobEvent): void
        public printJobCanceled(arg0: javax.print.event.PrintJobEvent): void
        public printJobNoMoreEvents(arg0: javax.print.event.PrintJobEvent): void
        public printJobRequiresAttention(arg0: javax.print.event.PrintJobEvent): void
      }
    }
  }
}
