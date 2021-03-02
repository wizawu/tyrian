declare namespace java {
  namespace awt {
    namespace datatransfer {

      class SystemFlavorMap implements java.awt.datatransfer.FlavorMap, java.awt.datatransfer.FlavorTable {
        public static getDefaultFlavorMap(): java.awt.datatransfer.FlavorMap
        public getNativesForFlavor(arg0: java.awt.datatransfer.DataFlavor): java.util.List<java.lang.String>
        public getFlavorsForNative(arg0: java.lang.String): java.util.List<java.awt.datatransfer.DataFlavor>
        public getNativesForFlavors(arg0: java.awt.datatransfer.DataFlavor[]): java.util.Map<java.awt.datatransfer.DataFlavor,java.lang.String>
        public getFlavorsForNatives(arg0: java.lang.String[]): java.util.Map<java.lang.String,java.awt.datatransfer.DataFlavor>
        public addUnencodedNativeForFlavor(arg0: java.awt.datatransfer.DataFlavor, arg1: java.lang.String): void
        public setNativesForFlavor(arg0: java.awt.datatransfer.DataFlavor, arg1: java.lang.String[]): void
        public addFlavorForUnencodedNative(arg0: java.lang.String, arg1: java.awt.datatransfer.DataFlavor): void
        public setFlavorsForNative(arg0: java.lang.String, arg1: java.awt.datatransfer.DataFlavor[]): void
        public static encodeJavaMIMEType(arg0: java.lang.String): java.lang.String
        public static encodeDataFlavor(arg0: java.awt.datatransfer.DataFlavor): java.lang.String
        public static isJavaMIMEType(arg0: java.lang.String): boolean
        public static decodeJavaMIMEType(arg0: java.lang.String): java.lang.String
        public static decodeDataFlavor(arg0: java.lang.String): java.awt.datatransfer.DataFlavor
      }

    }
  }
}
