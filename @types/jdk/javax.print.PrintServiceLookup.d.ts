declare namespace javax {
  namespace print {
    abstract class PrintServiceLookup {
      public constructor()
      public static lookupPrintServices(
        arg0: javax.print.DocFlavor,
        arg1: javax.print.attribute.AttributeSet
      ): javax.print.PrintService[]
      public static lookupMultiDocPrintServices(
        arg0: javax.print.DocFlavor[],
        arg1: javax.print.attribute.AttributeSet
      ): javax.print.MultiDocPrintService[]
      public static lookupDefaultPrintService(): javax.print.PrintService
      public static registerServiceProvider(arg0: javax.print.PrintServiceLookup): boolean
      public static registerService(arg0: javax.print.PrintService): boolean
      public abstract getPrintServices(
        arg0: javax.print.DocFlavor,
        arg1: javax.print.attribute.AttributeSet
      ): javax.print.PrintService[]
      public abstract getPrintServices(): javax.print.PrintService[]
      public abstract getMultiDocPrintServices(
        arg0: javax.print.DocFlavor[],
        arg1: javax.print.attribute.AttributeSet
      ): javax.print.MultiDocPrintService[]
      public abstract getDefaultPrintService(): javax.print.PrintService
    }
  }
}
