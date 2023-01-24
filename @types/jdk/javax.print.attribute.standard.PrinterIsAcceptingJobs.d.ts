declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class PrinterIsAcceptingJobs
          extends javax.print.attribute.EnumSyntax
          implements javax.print.attribute.PrintServiceAttribute
        {
          public static readonly NOT_ACCEPTING_JOBS: javax.print.attribute.standard.PrinterIsAcceptingJobs
          public static readonly ACCEPTING_JOBS: javax.print.attribute.standard.PrinterIsAcceptingJobs
          protected constructor(arg0: number | java.lang.Integer)
          protected getStringTable(): java.lang.String[]
          protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
