declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class PageRanges
          extends javax.print.attribute.SetOfIntegerSyntax
          implements
            javax.print.attribute.DocAttribute,
            javax.print.attribute.PrintRequestAttribute,
            javax.print.attribute.PrintJobAttribute
        {
          public constructor(arg0: number[][] | java.lang.Integer[][])
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: number | java.lang.Integer)
          public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
          public equals(arg0: java.lang.Object | any): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
