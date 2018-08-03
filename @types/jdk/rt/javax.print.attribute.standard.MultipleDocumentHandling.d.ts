declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class MultipleDocumentHandling extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintRequestAttribute , javax.print.attribute.PrintJobAttribute {
                    public static readonly SINGLE_DOCUMENT: javax.print.attribute.standard.MultipleDocumentHandling
                    public static readonly SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: javax.print.attribute.standard.MultipleDocumentHandling
                    public static readonly SEPARATE_DOCUMENTS_COLLATED_COPIES: javax.print.attribute.standard.MultipleDocumentHandling
                    public static readonly SINGLE_DOCUMENT_NEW_SHEET: javax.print.attribute.standard.MultipleDocumentHandling
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