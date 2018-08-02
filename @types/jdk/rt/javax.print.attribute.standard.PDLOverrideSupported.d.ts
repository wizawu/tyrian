declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class PDLOverrideSupported extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {
                    public static NOT_ATTEMPTED: javax.print.attribute.standard.PDLOverrideSupported
                    public static ATTEMPTED: javax.print.attribute.standard.PDLOverrideSupported
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