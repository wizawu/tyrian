declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class JobHoldUntil
          extends javax.print.attribute.DateTimeSyntax
          implements javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute
        {
          public constructor(arg0: java.util.Date)
          public equals(arg0: java.lang.Object | any): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
