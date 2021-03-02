declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class PrinterStateReasons extends java.util.HashMap<javax.print.attribute.standard.PrinterStateReason,javax.print.attribute.standard.Severity> implements javax.print.attribute.PrintServiceAttribute {
          public constructor()
          public constructor(arg0: number | java.lang.Integer)
          public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
          public constructor(arg0: java.util.Map<javax.print.attribute.standard.PrinterStateReason,javax.print.attribute.standard.Severity>)
          public put(arg0: javax.print.attribute.standard.PrinterStateReason, arg1: javax.print.attribute.standard.Severity): javax.print.attribute.standard.Severity
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
          public printerStateReasonSet(arg0: javax.print.attribute.standard.Severity): java.util.Set<javax.print.attribute.standard.PrinterStateReason>
          public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
        }

      }
    }
  }
}
