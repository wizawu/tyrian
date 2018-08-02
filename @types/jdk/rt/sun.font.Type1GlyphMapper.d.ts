declare namespace sun {
    namespace font {
        class Type1GlyphMapper extends sun.font.CharToGlyphMapper {
            public constructor(arg0: sun.font.Type1Font)
            public getNumGlyphs(): int
            public getMissingGlyphCode(): int
            public canDisplay(arg0: char): boolean
            public charToGlyph(arg0: char): int
            public charToGlyph(arg0: int): int
            public charsToGlyphs(arg0: int, arg1: char[], arg2: int[]): void
            public charsToGlyphs(arg0: int, arg1: int[], arg2: int[]): void
            public charsToGlyphsNS(arg0: int, arg1: char[], arg2: int[]): boolean
            public static class: java.lang.Class<any>
        }
    }
}