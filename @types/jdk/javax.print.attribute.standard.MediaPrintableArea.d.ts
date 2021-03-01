declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class MediaPrintableArea implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {

          public static readonly INCH: int
          public static readonly MM: int
          public constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: int)
          public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
          public getPrintableArea(arg0: int): float[]
          public getX(arg0: int): float
          public getY(arg0: int): float
          public getWidth(arg0: int): float
          public getHeight(arg0: int): float
          public equals(arg0: java.lang.Object): boolean
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
          public toString(arg0: int, arg1: java.lang.String): java.lang.String
          public toString(): java.lang.String
          public hashCode(): int
        }

      }
    }
  }
}
