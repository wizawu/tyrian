declare namespace javax {
    namespace print {
        namespace event {
            interface PrintJobListener {
                printDataTransferCompleted(arg0: javax.print.event.PrintJobEvent): void
                printJobCompleted(arg0: javax.print.event.PrintJobEvent): void
                printJobFailed(arg0: javax.print.event.PrintJobEvent): void
                printJobCanceled(arg0: javax.print.event.PrintJobEvent): void
                printJobNoMoreEvents(arg0: javax.print.event.PrintJobEvent): void
                printJobRequiresAttention(arg0: javax.print.event.PrintJobEvent): void
            }
        }
    }
}