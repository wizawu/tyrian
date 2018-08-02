declare namespace sun {
    namespace nio {
        namespace cs {
            class CharsetMapping {
                public static UNMAPPABLE_DECODING: char
                public static UNMAPPABLE_ENCODING: int
                public constructor()
                public decodeSingle(arg0: int): char
                public decodeDouble(arg0: int, arg1: int): char
                public decodeSurrogate(arg0: int, arg1: char[]): char[]
                public decodeComposite(arg0: sun.nio.cs.CharsetMapping$Entry, arg1: char[]): char[]
                public encodeChar(arg0: char): int
                public encodeSurrogate(arg0: char, arg1: char): int
                public isCompositeBase(arg0: sun.nio.cs.CharsetMapping$Entry): boolean
                public encodeComposite(arg0: sun.nio.cs.CharsetMapping$Entry): int
                public static get(arg0: java.io.InputStream): sun.nio.cs.CharsetMapping
                public static class: java.lang.Class<any>
            }
        }
    }
}