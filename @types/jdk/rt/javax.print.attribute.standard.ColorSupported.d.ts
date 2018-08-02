declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class ColorSupported extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {
                    public static NOT_SUPPORTED: javax.print.attribute.standard.ColorSupported
                    public static SUPPORTED: javax.print.attribute.standard.ColorSupported
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