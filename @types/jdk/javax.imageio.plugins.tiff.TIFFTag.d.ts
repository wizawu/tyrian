declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {
        class TIFFTag {
          public static readonly TIFF_BYTE: int
          public static readonly TIFF_ASCII: int
          public static readonly TIFF_SHORT: int
          public static readonly TIFF_LONG: int
          public static readonly TIFF_RATIONAL: int
          public static readonly TIFF_SBYTE: int
          public static readonly TIFF_UNDEFINED: int
          public static readonly TIFF_SSHORT: int
          public static readonly TIFF_SLONG: int
          public static readonly TIFF_SRATIONAL: int
          public static readonly TIFF_FLOAT: int
          public static readonly TIFF_DOUBLE: int
          public static readonly TIFF_IFD_POINTER: int
          public static readonly MIN_DATATYPE: int
          public static readonly MAX_DATATYPE: int
          public static readonly UNKNOWN_TAG_NAME: java.lang.String
          public constructor(
            arg0: java.lang.String | string,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          )
          public constructor(
            arg0: java.lang.String | string,
            arg1: number | java.lang.Integer,
            arg2: javax.imageio.plugins.tiff.TIFFTagSet
          )
          public constructor(
            arg0: java.lang.String | string,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          )
          public static getSizeOfType(arg0: number | java.lang.Integer): number
          public getName(): java.lang.String
          public getNumber(): number
          public getDataTypes(): number
          public getCount(): number
          public isDataTypeOK(arg0: number | java.lang.Integer): boolean
          public getTagSet(): javax.imageio.plugins.tiff.TIFFTagSet
          public isIFDPointer(): boolean
          public hasValueNames(): boolean
          protected addValueName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
          public getValueName(arg0: number | java.lang.Integer): java.lang.String
          public getNamedValues(): number[]
        }
      }
    }
  }
}
