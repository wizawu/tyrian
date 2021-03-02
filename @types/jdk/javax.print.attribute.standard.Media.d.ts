declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        abstract class Media extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
          protected constructor(arg0: number | java.lang.Integer)
          public equals(arg0: java.lang.Object | any): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }

      }
    }
  }
}
