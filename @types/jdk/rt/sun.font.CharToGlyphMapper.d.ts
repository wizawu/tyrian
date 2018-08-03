declare namespace sun {
    namespace font {
        abstract class CharToGlyphMapper {
            public static readonly HI_SURROGATE_START: int
            public static readonly HI_SURROGATE_END: int
            public static readonly LO_SURROGATE_START: int
            public static readonly LO_SURROGATE_END: int
            public static readonly UNINITIALIZED_GLYPH: int
            public static readonly INVISIBLE_GLYPH_ID: int
            public static readonly INVISIBLE_GLYPHS: int
            protected missingGlyph: int
            public constructor()
            public getMissingGlyphCode(): int
            public canDisplay(arg0: char): boolean
            public canDisplay(arg0: int): boolean
            public charToGlyph(arg0: char): int
            public charToGlyph(arg0: int): int
            public abstract getNumGlyphs(): int
            public abstract charsToGlyphs(arg0: int, arg1: char[], arg2: int[]): void
            public abstract charsToGlyphsNS(arg0: int, arg1: char[], arg2: int[]): boolean
            public abstract charsToGlyphs(arg0: int, arg1: int[], arg2: int[]): void
            public static class: java.lang.Class<any>
        }
    }
}