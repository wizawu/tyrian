declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class PrinterURI
          extends javax.print.attribute.URISyntax
          implements javax.print.attribute.PrintServiceAttribute
        {
          public constructor(arg0: java.net.URI)
          public equals(arg0: java.lang.Object | any): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
