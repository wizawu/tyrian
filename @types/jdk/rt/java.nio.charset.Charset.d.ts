declare namespace java {
    namespace nio {
        namespace charset {
            abstract class Charset implements java.lang.Comparable<java.nio.charset.Charset> {
                public static isSupported(arg0: java.lang.String | string): boolean
                public static forName(arg0: java.lang.String | string): java.nio.charset.Charset
                public static availableCharsets(): java.util.SortedMap<java.lang.String, java.nio.charset.Charset>
                public static defaultCharset(): java.nio.charset.Charset
                protected constructor(arg0: java.lang.String | string, arg1: java.lang.String[])
                public name(): string
                public aliases(): java.util.Set<java.lang.String>
                public displayName(): string
                public isRegistered(): boolean
                public displayName(arg0: java.util.Locale): string
                public contains(arg0: java.nio.charset.Charset): boolean
                public newDecoder(): java.nio.charset.CharsetDecoder
                public newEncoder(): java.nio.charset.CharsetEncoder
                public canEncode(): boolean
                public decode(arg0: java.nio.ByteBuffer): java.nio.CharBuffer
                public encode(arg0: java.nio.CharBuffer): java.nio.ByteBuffer
                public encode(arg0: java.lang.String | string): java.nio.ByteBuffer
                public compareTo(arg0: java.nio.charset.Charset): int
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
        }
    }
}