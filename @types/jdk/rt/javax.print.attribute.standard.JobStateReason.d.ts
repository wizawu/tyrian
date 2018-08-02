declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
class JobStateReason extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
    public static JOB_INCOMING: javax.print.attribute.standard.JobStateReason
    public static JOB_DATA_INSUFFICIENT: javax.print.attribute.standard.JobStateReason
    public static DOCUMENT_ACCESS_ERROR: javax.print.attribute.standard.JobStateReason
    public static SUBMISSION_INTERRUPTED: javax.print.attribute.standard.JobStateReason
    public static JOB_OUTGOING: javax.print.attribute.standard.JobStateReason
    public static JOB_HOLD_UNTIL_SPECIFIED: javax.print.attribute.standard.JobStateReason
    public static RESOURCES_ARE_NOT_READY: javax.print.attribute.standard.JobStateReason
    public static PRINTER_STOPPED_PARTLY: javax.print.attribute.standard.JobStateReason
    public static PRINTER_STOPPED: javax.print.attribute.standard.JobStateReason
    public static JOB_INTERPRETING: javax.print.attribute.standard.JobStateReason
    public static JOB_QUEUED: javax.print.attribute.standard.JobStateReason
    public static JOB_TRANSFORMING: javax.print.attribute.standard.JobStateReason
    public static JOB_QUEUED_FOR_MARKER: javax.print.attribute.standard.JobStateReason
    public static JOB_PRINTING: javax.print.attribute.standard.JobStateReason
    public static JOB_CANCELED_BY_USER: javax.print.attribute.standard.JobStateReason
    public static JOB_CANCELED_BY_OPERATOR: javax.print.attribute.standard.JobStateReason
    public static JOB_CANCELED_AT_DEVICE: javax.print.attribute.standard.JobStateReason
    public static ABORTED_BY_SYSTEM: javax.print.attribute.standard.JobStateReason
    public static UNSUPPORTED_COMPRESSION: javax.print.attribute.standard.JobStateReason
    public static COMPRESSION_ERROR: javax.print.attribute.standard.JobStateReason
    public static UNSUPPORTED_DOCUMENT_FORMAT: javax.print.attribute.standard.JobStateReason
    public static DOCUMENT_FORMAT_ERROR: javax.print.attribute.standard.JobStateReason
    public static PROCESSING_TO_STOP_POINT: javax.print.attribute.standard.JobStateReason
    public static SERVICE_OFF_LINE: javax.print.attribute.standard.JobStateReason
    public static JOB_COMPLETED_SUCCESSFULLY: javax.print.attribute.standard.JobStateReason
    public static JOB_COMPLETED_WITH_WARNINGS: javax.print.attribute.standard.JobStateReason
    public static JOB_COMPLETED_WITH_ERRORS: javax.print.attribute.standard.JobStateReason
    public static JOB_RESTARTABLE: javax.print.attribute.standard.JobStateReason
    public static QUEUED_IN_DEVICE: javax.print.attribute.standard.JobStateReason
    protected constructor(arg0: int)
    protected getStringTable(): java.lang.String[]
    protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
    public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
    public getName(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}