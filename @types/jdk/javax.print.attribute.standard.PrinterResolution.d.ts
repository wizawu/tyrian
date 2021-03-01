declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class PrinterResolution extends javax.print.attribute.ResolutionSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {

          public constructor(arg0: int, arg1: int, arg2: int)
          public equals(arg0: java.lang.Object): boolean
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}
