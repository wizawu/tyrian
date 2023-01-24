declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {
        class MediaSize extends javax.print.attribute.Size2DSyntax implements javax.print.attribute.Attribute {
          public constructor(
            arg0: number | java.lang.Float,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Integer
          )
          public constructor(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          )
          public constructor(
            arg0: number | java.lang.Float,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Integer,
            arg3: javax.print.attribute.standard.MediaSizeName
          )
          public constructor(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: javax.print.attribute.standard.MediaSizeName
          )
          public getMediaSizeName(): javax.print.attribute.standard.MediaSizeName
          public static getMediaSizeForName(
            arg0: javax.print.attribute.standard.MediaSizeName
          ): javax.print.attribute.standard.MediaSize
          public static findMedia(
            arg0: number | java.lang.Float,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Integer
          ): javax.print.attribute.standard.MediaSizeName
          public equals(arg0: java.lang.Object | any): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
        }
      }
    }
  }
}
