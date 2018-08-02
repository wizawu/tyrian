declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class JobState extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintJobAttribute {
                    public static UNKNOWN: javax.print.attribute.standard.JobState
                    public static PENDING: javax.print.attribute.standard.JobState
                    public static PENDING_HELD: javax.print.attribute.standard.JobState
                    public static PROCESSING: javax.print.attribute.standard.JobState
                    public static PROCESSING_STOPPED: javax.print.attribute.standard.JobState
                    public static CANCELED: javax.print.attribute.standard.JobState
                    public static ABORTED: javax.print.attribute.standard.JobState
                    public static COMPLETED: javax.print.attribute.standard.JobState
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