declare namespace sun {
    namespace font {
        class CompositeGlyphMapper extends sun.font.CharToGlyphMapper {
            public static SLOTMASK: int
            public static GLYPHMASK: int
            public static NBLOCKS: int
            public static BLOCKSZ: int
            public static MAXUNICODE: int
            public constructor(arg0: sun.font.CompositeFont)
            public compositeGlyphCode(arg0: int, arg1: int): int
            public getNumGlyphs(): int
            public charToGlyph(arg0: int): int
            public charToGlyph(arg0: int, arg1: int): int
            public charToGlyph(arg0: char): int
            public charsToGlyphsNS(arg0: int, arg1: char[], arg2: int[]): boolean
            public charsToGlyphs(arg0: int, arg1: char[], arg2: int[]): void
            public charsToGlyphs(arg0: int, arg1: int[], arg2: int[]): void
            public static class: java.lang.Class<any>
        }
    }
}