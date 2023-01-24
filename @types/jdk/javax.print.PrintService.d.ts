declare namespace javax {
  namespace print {
    interface PrintService {
      getName(): java.lang.String
      createPrintJob(): javax.print.DocPrintJob
      addPrintServiceAttributeListener(
        arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$lambda
      ): void
      removePrintServiceAttributeListener(
        arg0: javax.print.event.PrintServiceAttributeListener | javax.print.event.PrintServiceAttributeListener$$lambda
      ): void
      getAttributes(): javax.print.attribute.PrintServiceAttributeSet
      getAttribute<T extends javax.print.attribute.PrintServiceAttribute>(arg0: java.lang.Class<T>): T
      getSupportedDocFlavors(): javax.print.DocFlavor[]
      isDocFlavorSupported(arg0: javax.print.DocFlavor): boolean
      getSupportedAttributeCategories(): java.lang.Class<unknown>[]
      isAttributeCategorySupported(arg0: java.lang.Class<javax.print.attribute.Attribute>): boolean
      getDefaultAttributeValue(arg0: java.lang.Class<javax.print.attribute.Attribute>): java.lang.Object
      getSupportedAttributeValues(
        arg0: java.lang.Class<javax.print.attribute.Attribute>,
        arg1: javax.print.DocFlavor,
        arg2: javax.print.attribute.AttributeSet
      ): java.lang.Object
      isAttributeValueSupported(
        arg0: javax.print.attribute.Attribute,
        arg1: javax.print.DocFlavor,
        arg2: javax.print.attribute.AttributeSet
      ): boolean
      getUnsupportedAttributes(
        arg0: javax.print.DocFlavor,
        arg1: javax.print.attribute.AttributeSet
      ): javax.print.attribute.AttributeSet
      getServiceUIFactory(): javax.print.ServiceUIFactory
      equals(arg0: java.lang.Object | any): boolean
      hashCode(): number
    }
  }
}
