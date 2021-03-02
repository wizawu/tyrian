declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class OrientationRequested extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
          public static readonly PORTRAIT: javax.print.attribute.standard.OrientationRequested
          public static readonly LANDSCAPE: javax.print.attribute.standard.OrientationRequested
          public static readonly REVERSE_LANDSCAPE: javax.print.attribute.standard.OrientationRequested
          public static readonly REVERSE_PORTRAIT: javax.print.attribute.standard.OrientationRequested
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
