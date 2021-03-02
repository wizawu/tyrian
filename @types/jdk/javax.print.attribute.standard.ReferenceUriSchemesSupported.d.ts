declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class ReferenceUriSchemesSupported extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
          public static readonly FTP: javax.print.attribute.standard.ReferenceUriSchemesSupported
          public static readonly HTTP: javax.print.attribute.standard.ReferenceUriSchemesSupported
          public static readonly HTTPS: javax.print.attribute.standard.ReferenceUriSchemesSupported
          public static readonly GOPHER: javax.print.attribute.standard.ReferenceUriSchemesSupported
          public static readonly NEWS: javax.print.attribute.standard.ReferenceUriSchemesSupported
          public static readonly NNTP: javax.print.attribute.standard.ReferenceUriSchemesSupported
          public static readonly WAIS: javax.print.attribute.standard.ReferenceUriSchemesSupported
          public static readonly FILE: javax.print.attribute.standard.ReferenceUriSchemesSupported
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
