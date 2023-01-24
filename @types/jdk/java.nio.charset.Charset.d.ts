declare namespace java {
  namespace nio {
    namespace charset {
      abstract class Charset implements java.lang.Comparable<java.nio.charset.Charset> {
        public static isSupported(arg0: java.lang.String | string): boolean
        public static forName(arg0: java.lang.String | string): java.nio.charset.Charset
        public static availableCharsets(): java.util.SortedMap<java.lang.String, java.nio.charset.Charset>
        public static defaultCharset(): java.nio.charset.Charset
        protected constructor(arg0: java.lang.String | string, arg1: java.lang.String[] | string[])
        public name(): java.lang.String
        public aliases(): java.util.Set<java.lang.String>
        public displayName(): java.lang.String
        public isRegistered(): boolean
        public displayName(arg0: java.util.Locale): java.lang.String
        public abstract contains(arg0: java.nio.charset.Charset): boolean
        public abstract newDecoder(): java.nio.charset.CharsetDecoder
        public abstract newEncoder(): java.nio.charset.CharsetEncoder
        public canEncode(): boolean
        public decode(arg0: java.nio.ByteBuffer): java.nio.CharBuffer
        public encode(arg0: java.nio.CharBuffer): java.nio.ByteBuffer
        public encode(arg0: java.lang.String | string): java.nio.ByteBuffer
        public compareTo(arg0: java.nio.charset.Charset): number
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public toString(): java.lang.String
        public compareTo(arg0: java.lang.Object | any): number
      }
    }
  }
}
