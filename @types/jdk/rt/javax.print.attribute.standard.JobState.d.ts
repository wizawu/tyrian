declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class JobState extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintJobAttribute {
                    public static readonly UNKNOWN: javax.print.attribute.standard.JobState
                    public static readonly PENDING: javax.print.attribute.standard.JobState
                    public static readonly PENDING_HELD: javax.print.attribute.standard.JobState
                    public static readonly PROCESSING: javax.print.attribute.standard.JobState
                    public static readonly PROCESSING_STOPPED: javax.print.attribute.standard.JobState
                    public static readonly CANCELED: javax.print.attribute.standard.JobState
                    public static readonly ABORTED: javax.print.attribute.standard.JobState
                    public static readonly COMPLETED: javax.print.attribute.standard.JobState
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