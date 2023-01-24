declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class Fidelity
          extends javax.print.attribute.EnumSyntax
          implements javax.print.attribute.PrintJobAttribute, javax.print.attribute.PrintRequestAttribute
        {
          public static readonly FIDELITY_TRUE: javax.print.attribute.standard.Fidelity
          public static readonly FIDELITY_FALSE: javax.print.attribute.standard.Fidelity
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
