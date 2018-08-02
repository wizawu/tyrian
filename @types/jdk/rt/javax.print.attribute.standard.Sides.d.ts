declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class Sides extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute , javax.print.attribute.PrintRequestAttribute , javax.print.attribute.PrintJobAttribute {
                    public static ONE_SIDED: javax.print.attribute.standard.Sides
                    public static TWO_SIDED_LONG_EDGE: javax.print.attribute.standard.Sides
                    public static TWO_SIDED_SHORT_EDGE: javax.print.attribute.standard.Sides
                    public static DUPLEX: javax.print.attribute.standard.Sides
                    public static TUMBLE: javax.print.attribute.standard.Sides
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