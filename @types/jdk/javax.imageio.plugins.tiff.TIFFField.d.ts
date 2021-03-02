declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {

        class TIFFField implements java.lang.Cloneable {
          public static createFromMetadataNode(arg0: javax.imageio.plugins.tiff.TIFFTagSet, arg1: org.w3c.dom.Node): javax.imageio.plugins.tiff.TIFFField
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: int, arg2: int, arg3: java.lang.Object)
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: int, arg2: int)
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: long)
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: int, arg2: long, arg3: javax.imageio.plugins.tiff.TIFFDirectory)
          public getTag(): javax.imageio.plugins.tiff.TIFFTag
          public getTagNumber(): int
          public getType(): int
          public static getTypeName(arg0: int): java.lang.String
          public static getTypeByName(arg0: java.lang.String): int
          public static createArrayForType(arg0: int, arg1: int): java.lang.Object
          public getAsNativeNode(): org.w3c.dom.Node
          public isIntegral(): boolean
          public getCount(): int
          public getData(): java.lang.Object
          public getAsBytes(): byte[]
          public getAsChars(): char[]
          public getAsShorts(): short[]
          public getAsInts(): int[]
          public getAsLongs(): long[]
          public getAsFloats(): float[]
          public getAsDoubles(): double[]
          public getAsSRationals(): int[][]
          public getAsRationals(): long[][]
          public getAsInt(arg0: int): int
          public getAsLong(arg0: int): long
          public getAsFloat(arg0: int): float
          public getAsDouble(arg0: int): double
          public getAsString(arg0: int): java.lang.String
          public getAsSRational(arg0: int): int[]
          public getAsRational(arg0: int): long[]
          public getValueAsString(arg0: int): java.lang.String
          public hasDirectory(): boolean
          public getDirectory(): javax.imageio.plugins.tiff.TIFFDirectory
          public clone(): javax.imageio.plugins.tiff.TIFFField
          public clone(): java.lang.Object
        }

      }
    }
  }
}
