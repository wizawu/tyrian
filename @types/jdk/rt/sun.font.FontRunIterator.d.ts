declare namespace sun {
    namespace font {
        class FontRunIterator {
            public constructor()
            public init(arg0: sun.font.CompositeFont, arg1: char[], arg2: int, arg3: int): void
            public getFont(): sun.font.PhysicalFont
            public getGlyphMask(): int
            public getPos(): int
            public next(arg0: int, arg1: int): boolean
            public next(): boolean
            public static class: java.lang.Class<any>
        }
    }
}