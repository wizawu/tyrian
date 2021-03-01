declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class PresentationDirection extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintJobAttribute, javax.print.attribute.PrintRequestAttribute {

          public static readonly TOBOTTOM_TORIGHT: javax.print.attribute.standard.PresentationDirection
          public static readonly TOBOTTOM_TOLEFT: javax.print.attribute.standard.PresentationDirection
          public static readonly TOTOP_TORIGHT: javax.print.attribute.standard.PresentationDirection
          public static readonly TOTOP_TOLEFT: javax.print.attribute.standard.PresentationDirection
          public static readonly TORIGHT_TOBOTTOM: javax.print.attribute.standard.PresentationDirection
          public static readonly TORIGHT_TOTOP: javax.print.attribute.standard.PresentationDirection
          public static readonly TOLEFT_TOBOTTOM: javax.print.attribute.standard.PresentationDirection
          public static readonly TOLEFT_TOTOP: javax.print.attribute.standard.PresentationDirection
          protected getStringTable(): java.lang.String[]
          protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}
