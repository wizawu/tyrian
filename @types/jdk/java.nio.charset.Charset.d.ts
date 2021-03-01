declare namespace java {
  namespace nio {
    namespace charset {

      abstract class Charset implements java.lang.Comparable<java.nio.charset.Charset> {

        public static isSupported(arg0: java.lang.String): boolean
        public static forName(arg0: java.lang.String): java.nio.charset.Charset
        public static availableCharsets(): java.util.SortedMap<java.lang.String,java.nio.charset.Charset>
        public static defaultCharset(): java.nio.charset.Charset
        protected constructor(arg0: java.lang.String, arg1: java.lang.String[])
        public readonly name(): java.lang.String
        public readonly aliases(): java.util.Set<java.lang.String>
        public displayName(): java.lang.String
        public readonly isRegistered(): boolean
        public displayName(arg0: java.util.Locale): java.lang.String
        public abstract contains(arg0: java.nio.charset.Charset): boolean
        public abstract newDecoder(): java.nio.charset.CharsetDecoder
        public abstract newEncoder(): java.nio.charset.CharsetEncoder
        public canEncode(): boolean
        public readonly decode(arg0: java.nio.ByteBuffer): java.nio.CharBuffer
        public readonly encode(arg0: java.nio.CharBuffer): java.nio.ByteBuffer
        public readonly encode(arg0: java.lang.String): java.nio.ByteBuffer
        public readonly compareTo(arg0: java.nio.charset.Charset): int
        public readonly hashCode(): int
        public readonly equals(arg0: java.lang.Object): boolean
        public readonly toString(): java.lang.String
        public compareTo(arg0: java.lang.Object): int
      }

    }
  }
}
