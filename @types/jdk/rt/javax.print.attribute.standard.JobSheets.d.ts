declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class JobSheets extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintRequestAttribute , javax.print.attribute.PrintJobAttribute {
                    public static readonly NONE: javax.print.attribute.standard.JobSheets
                    public static readonly STANDARD: javax.print.attribute.standard.JobSheets
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