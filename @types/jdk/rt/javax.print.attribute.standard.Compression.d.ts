declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class Compression extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute {
                    public static NONE: javax.print.attribute.standard.Compression
                    public static DEFLATE: javax.print.attribute.standard.Compression
                    public static GZIP: javax.print.attribute.standard.Compression
                    public static COMPRESS: javax.print.attribute.standard.Compression
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