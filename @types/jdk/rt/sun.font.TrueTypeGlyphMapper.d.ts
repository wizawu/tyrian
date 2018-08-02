declare namespace sun {
    namespace font {
        class TrueTypeGlyphMapper extends sun.font.CharToGlyphMapper {
            public constructor(arg0: sun.font.TrueTypeFont)
            public getNumGlyphs(): int
            public charToGlyph(arg0: char): int
            public charToGlyph(arg0: int): int
            public charsToGlyphs(arg0: int, arg1: int[], arg2: int[]): void
            public charsToGlyphs(arg0: int, arg1: char[], arg2: int[]): void
            public charsToGlyphsNS(arg0: int, arg1: char[], arg2: int[]): boolean
            public static class: java.lang.Class<any>
        }
    }
}