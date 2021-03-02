declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class ColorSupported extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {
          public static readonly NOT_SUPPORTED: javax.print.attribute.standard.ColorSupported
          public static readonly SUPPORTED: javax.print.attribute.standard.ColorSupported
          protected constructor(arg0: int)
          protected getStringTable(): java.lang.String[]
          protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }

      }
    }
  }
}
