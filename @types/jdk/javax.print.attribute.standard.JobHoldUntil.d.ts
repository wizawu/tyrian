declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class JobHoldUntil extends javax.print.attribute.DateTimeSyntax implements javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {

          public constructor(arg0: java.util.Date)
          public equals(arg0: java.lang.Object): boolean
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}