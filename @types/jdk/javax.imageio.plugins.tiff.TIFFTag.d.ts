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
          public constructor(arg0: java.lang.String, arg1: int, arg2: int, arg3: int)
          public constructor(arg0: java.lang.String, arg1: int, arg2: javax.imageio.plugins.tiff.TIFFTagSet)
          public constructor(arg0: java.lang.String, arg1: int, arg2: int)
          public static getSizeOfType(arg0: int): int
          public getName(): java.lang.String
          public getNumber(): int
          public getDataTypes(): int
          public getCount(): int
          public isDataTypeOK(arg0: int): boolean
          public getTagSet(): javax.imageio.plugins.tiff.TIFFTagSet
          public isIFDPointer(): boolean
          public hasValueNames(): boolean
          protected addValueName(arg0: int, arg1: java.lang.String): void
          public getValueName(arg0: int): java.lang.String
          public getNamedValues(): int[]
        }

      }
    }
  }
}
