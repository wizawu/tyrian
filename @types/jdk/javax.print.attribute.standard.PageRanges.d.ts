declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class PageRanges extends javax.print.attribute.SetOfIntegerSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
          public constructor(arg0: int[][])
          public constructor(arg0: java.lang.String)
          public constructor(arg0: int)
          public constructor(arg0: int, arg1: int)
          public equals(arg0: java.lang.Object): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }

      }
    }
  }
}
