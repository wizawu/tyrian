declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {

        class TIFFField implements java.lang.Cloneable {
          public static createFromMetadataNode(arg0: javax.imageio.plugins.tiff.TIFFTagSet, arg1: org.w3c.dom.Node): javax.imageio.plugins.tiff.TIFFField
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.Object | any)
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: number | java.lang.Long)
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTag, arg1: number | java.lang.Integer, arg2: number | java.lang.Long, arg3: javax.imageio.plugins.tiff.TIFFDirectory)
          public getTag(): javax.imageio.plugins.tiff.TIFFTag
          public getTagNumber(): number
          public getType(): number
          public static getTypeName(arg0: number | java.lang.Integer): java.lang.String
          public static getTypeByName(arg0: java.lang.String | string): number
          public static createArrayForType(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.Object
          public getAsNativeNode(): org.w3c.dom.Node
          public isIntegral(): boolean
          public getCount(): number
          public getData(): java.lang.Object
          public getAsBytes(): number[]
          public getAsChars(): string[]
          public getAsShorts(): number[]
          public getAsInts(): number[]
          public getAsLongs(): number[]
          public getAsFloats(): number[]
          public getAsDoubles(): number[]
          public getAsSRationals(): number[][]
          public getAsRationals(): number[][]
          public getAsInt(arg0: number | java.lang.Integer): number
          public getAsLong(arg0: number | java.lang.Integer): number
          public getAsFloat(arg0: number | java.lang.Integer): number
          public getAsDouble(arg0: number | java.lang.Integer): number
          public getAsString(arg0: number | java.lang.Integer): java.lang.String
          public getAsSRational(arg0: number | java.lang.Integer): number[]
          public getAsRational(arg0: number | java.lang.Integer): number[]
          public getValueAsString(arg0: number | java.lang.Integer): java.lang.String
          public hasDirectory(): boolean
          public getDirectory(): javax.imageio.plugins.tiff.TIFFDirectory
          public clone(): javax.imageio.plugins.tiff.TIFFField
          public clone(): java.lang.Object
        }

      }
    }
  }
}
