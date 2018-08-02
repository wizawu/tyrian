declare namespace sun {
    namespace font {
        class GlyphList {
            public static getInstance(): sun.font.GlyphList
            public setFromString(arg0: sun.java2d.loops.FontInfo, arg1: java.lang.String | string, arg2: float, arg3: float): boolean
            public setFromChars(arg0: sun.java2d.loops.FontInfo, arg1: char[], arg2: int, arg3: int, arg4: float, arg5: float): boolean
            public setFromGlyphVector(arg0: sun.java2d.loops.FontInfo, arg1: java.awt.font.GlyphVector, arg2: float, arg3: float): void
            public getBounds(): int[]
            public setGlyphIndex(arg0: int): void
            public getMetrics(): int[]
            public getGrayBits(): byte[]
            public getImages(): long[]
            public usePositions(): boolean
            public getPositions(): float[]
            public getX(): float
            public getY(): float
            public getStrike(): java.lang.Object
            public isSubPixPos(): boolean
            public isRGBOrder(): boolean
            public dispose(): void
            public getNumGlyphs(): int
            public static class: java.lang.Class<any>
        }
    }
}