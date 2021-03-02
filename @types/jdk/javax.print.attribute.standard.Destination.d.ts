declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class Destination extends javax.print.attribute.URISyntax implements javax.print.attribute.PrintJobAttribute, javax.print.attribute.PrintRequestAttribute {
          public constructor(arg0: java.net.URI)
          public equals(arg0: java.lang.Object): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }

      }
    }
  }
}
