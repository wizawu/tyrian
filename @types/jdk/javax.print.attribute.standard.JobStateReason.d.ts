declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class JobStateReason extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
          public static readonly JOB_INCOMING: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_DATA_INSUFFICIENT: javax.print.attribute.standard.JobStateReason
          public static readonly DOCUMENT_ACCESS_ERROR: javax.print.attribute.standard.JobStateReason
          public static readonly SUBMISSION_INTERRUPTED: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_OUTGOING: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_HOLD_UNTIL_SPECIFIED: javax.print.attribute.standard.JobStateReason
          public static readonly RESOURCES_ARE_NOT_READY: javax.print.attribute.standard.JobStateReason
          public static readonly PRINTER_STOPPED_PARTLY: javax.print.attribute.standard.JobStateReason
          public static readonly PRINTER_STOPPED: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_INTERPRETING: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_QUEUED: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_TRANSFORMING: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_QUEUED_FOR_MARKER: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_PRINTING: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_CANCELED_BY_USER: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_CANCELED_BY_OPERATOR: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_CANCELED_AT_DEVICE: javax.print.attribute.standard.JobStateReason
          public static readonly ABORTED_BY_SYSTEM: javax.print.attribute.standard.JobStateReason
          public static readonly UNSUPPORTED_COMPRESSION: javax.print.attribute.standard.JobStateReason
          public static readonly COMPRESSION_ERROR: javax.print.attribute.standard.JobStateReason
          public static readonly UNSUPPORTED_DOCUMENT_FORMAT: javax.print.attribute.standard.JobStateReason
          public static readonly DOCUMENT_FORMAT_ERROR: javax.print.attribute.standard.JobStateReason
          public static readonly PROCESSING_TO_STOP_POINT: javax.print.attribute.standard.JobStateReason
          public static readonly SERVICE_OFF_LINE: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_COMPLETED_SUCCESSFULLY: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_COMPLETED_WITH_WARNINGS: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_COMPLETED_WITH_ERRORS: javax.print.attribute.standard.JobStateReason
          public static readonly JOB_RESTARTABLE: javax.print.attribute.standard.JobStateReason
          public static readonly QUEUED_IN_DEVICE: javax.print.attribute.standard.JobStateReason
          protected constructor(arg0: number | java.lang.Integer)
          protected getStringTable(): java.lang.String[]
          protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
