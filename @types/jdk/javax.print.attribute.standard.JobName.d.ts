declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class JobName extends javax.print.attribute.TextSyntax implements javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {

          public constructor(arg0: java.lang.String, arg1: java.util.Locale)
          public equals(arg0: java.lang.Object): boolean
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}
