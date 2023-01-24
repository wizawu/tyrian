declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class MediaPrintableArea
          implements
            javax.print.attribute.DocAttribute,
            javax.print.attribute.PrintRequestAttribute,
            javax.print.attribute.PrintJobAttribute
        {
          public static readonly INCH: int
          public static readonly MM: int
          public constructor(
            arg0: number | java.lang.Float,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Float,
            arg3: number | java.lang.Float,
            arg4: number | java.lang.Integer
          )
          public constructor(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer
          )
          public getPrintableArea(arg0: number | java.lang.Integer): number[]
          public getX(arg0: number | java.lang.Integer): number
          public getY(arg0: number | java.lang.Integer): number
          public getWidth(arg0: number | java.lang.Integer): number
          public getHeight(arg0: number | java.lang.Integer): number
          public equals(arg0: java.lang.Object | any): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
          public toString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): java.lang.String
          public toString(): java.lang.String
          public hashCode(): number
        }
      }
    }
  }
}
