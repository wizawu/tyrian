declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class Chromaticity
          extends javax.print.attribute.EnumSyntax
          implements
            javax.print.attribute.DocAttribute,
            javax.print.attribute.PrintRequestAttribute,
            javax.print.attribute.PrintJobAttribute
        {
          public static readonly MONOCHROME: javax.print.attribute.standard.Chromaticity
          public static readonly COLOR: javax.print.attribute.standard.Chromaticity
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
