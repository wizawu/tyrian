declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class PrintQuality extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
          public static readonly DRAFT: javax.print.attribute.standard.PrintQuality
          public static readonly NORMAL: javax.print.attribute.standard.PrintQuality
          public static readonly HIGH: javax.print.attribute.standard.PrintQuality
          protected constructor(arg0: int)
          protected getStringTable(): java.lang.String[]
          protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
          protected getOffset(): int
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }

      }
    }
  }
}
