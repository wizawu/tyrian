declare namespace sun {
    namespace font {
        abstract class CharToGlyphMapper {
            public static HI_SURROGATE_START: int
            public static HI_SURROGATE_END: int
            public static LO_SURROGATE_START: int
            public static LO_SURROGATE_END: int
            public static UNINITIALIZED_GLYPH: int
            public static INVISIBLE_GLYPH_ID: int
            public static INVISIBLE_GLYPHS: int
            protected missingGlyph: int
            public constructor()
            public getMissingGlyphCode(): int
            public canDisplay(arg0: char): boolean
            public canDisplay(arg0: int): boolean
            public charToGlyph(arg0: char): int
            public charToGlyph(arg0: int): int
            public getNumGlyphs(): int
            public charsToGlyphs(arg0: int, arg1: char[], arg2: int[]): void
            public charsToGlyphsNS(arg0: int, arg1: char[], arg2: int[]): boolean
            public charsToGlyphs(arg0: int, arg1: int[], arg2: int[]): void
            public static class: java.lang.Class<any>
        }
    }
}