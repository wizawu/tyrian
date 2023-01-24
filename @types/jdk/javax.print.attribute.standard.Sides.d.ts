declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class Sides
          extends javax.print.attribute.EnumSyntax
          implements
            javax.print.attribute.DocAttribute,
            javax.print.attribute.PrintRequestAttribute,
            javax.print.attribute.PrintJobAttribute
        {
          public static readonly ONE_SIDED: javax.print.attribute.standard.Sides
          public static readonly TWO_SIDED_LONG_EDGE: javax.print.attribute.standard.Sides
          public static readonly TWO_SIDED_SHORT_EDGE: javax.print.attribute.standard.Sides
          public static readonly DUPLEX: javax.print.attribute.standard.Sides
          public static readonly TUMBLE: javax.print.attribute.standard.Sides
          protected constructor(arg0: number | java.lang.Integer)
          protected getStringTable(): java.lang.String[]
          protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
