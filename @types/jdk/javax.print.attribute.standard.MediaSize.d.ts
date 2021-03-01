declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class MediaSize extends javax.print.attribute.Size2DSyntax implements javax.print.attribute.Attribute {

          public constructor(arg0: float, arg1: float, arg2: int)
          public constructor(arg0: int, arg1: int, arg2: int)
          public constructor(arg0: float, arg1: float, arg2: int, arg3: javax.print.attribute.standard.MediaSizeName)
          public constructor(arg0: int, arg1: int, arg2: int, arg3: javax.print.attribute.standard.MediaSizeName)
          public getMediaSizeName(): javax.print.attribute.standard.MediaSizeName
          public static getMediaSizeForName(arg0: javax.print.attribute.standard.MediaSizeName): javax.print.attribute.standard.MediaSize
          public static findMedia(arg0: float, arg1: float, arg2: int): javax.print.attribute.standard.MediaSizeName
          public equals(arg0: java.lang.Object): boolean
          public readonly getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public readonly getName(): java.lang.String
        }

      }
    }
  }
}
