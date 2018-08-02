declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class Fidelity extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintJobAttribute , javax.print.attribute.PrintRequestAttribute {
                    public static FIDELITY_TRUE: javax.print.attribute.standard.Fidelity
                    public static FIDELITY_FALSE: javax.print.attribute.standard.Fidelity
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