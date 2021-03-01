declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class PrinterState extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {

          public static readonly UNKNOWN: javax.print.attribute.standard.PrinterState
          public static readonly IDLE: javax.print.attribute.standard.PrinterState
          public static readonly PROCESSING: javax.print.attribute.standard.PrinterState
          public static readonly STOPPED: javax.print.attribute.standard.PrinterState
          protected constructor(arg0: int)
          protected getStringTable(): java.lang.String[]
          protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}
