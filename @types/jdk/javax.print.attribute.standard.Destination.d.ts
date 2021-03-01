declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class Destination extends javax.print.attribute.URISyntax implements javax.print.attribute.PrintJobAttribute, javax.print.attribute.PrintRequestAttribute {

          public constructor(arg0: java.net.URI)
          public equals(arg0: java.lang.Object): boolean
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}
