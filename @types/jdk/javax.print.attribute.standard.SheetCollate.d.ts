declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class SheetCollate
          extends javax.print.attribute.EnumSyntax
          implements
            javax.print.attribute.DocAttribute,
            javax.print.attribute.PrintRequestAttribute,
            javax.print.attribute.PrintJobAttribute
        {
          public static readonly UNCOLLATED: javax.print.attribute.standard.SheetCollate
          public static readonly COLLATED: javax.print.attribute.standard.SheetCollate
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
