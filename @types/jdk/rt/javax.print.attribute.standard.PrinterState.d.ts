declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class PrinterState extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {
                    public static UNKNOWN: javax.print.attribute.standard.PrinterState
                    public static IDLE: javax.print.attribute.standard.PrinterState
                    public static PROCESSING: javax.print.attribute.standard.PrinterState
                    public static STOPPED: javax.print.attribute.standard.PrinterState
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