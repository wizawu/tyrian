declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class Severity extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
                    public static REPORT: javax.print.attribute.standard.Severity
                    public static WARNING: javax.print.attribute.standard.Severity
                    public static ERROR: javax.print.attribute.standard.Severity
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