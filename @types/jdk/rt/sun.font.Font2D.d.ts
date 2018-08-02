declare namespace sun {
    namespace font {
        abstract class Font2D {
            public static FONT_CONFIG_RANK: int
            public static JRE_RANK: int
            public static TTF_RANK: int
            public static TYPE1_RANK: int
            public static NATIVE_RANK: int
            public static UNKNOWN_RANK: int
            public static DEFAULT_RANK: int
            public handle: sun.font.Font2DHandle
            protected familyName: string
            protected fullName: string
            protected style: int
            protected family: sun.font.FontFamily
            protected fontRank: int
            protected mapper: sun.font.CharToGlyphMapper
            protected strikeCache: java.util.concurrent.ConcurrentHashMap<sun.font.FontStrikeDesc, java.lang.ref.Reference>
            protected lastFontStrike: java.lang.ref.Reference
            public static FWIDTH_NORMAL: int
            public static FWEIGHT_NORMAL: int
            public static FWEIGHT_BOLD: int
            public constructor()
            public getStyle(): int
            protected setStyle(): void
            public getWidth(): int
            public getWeight(): int
            protected getValidatedGlyphCode(arg0: int): int
            public getStrike(arg0: java.awt.Font): sun.font.FontStrike
            public getStrike(arg0: java.awt.Font, arg1: java.awt.geom.AffineTransform, arg2: int, arg3: int): sun.font.FontStrike
            public getStrike(arg0: java.awt.Font, arg1: java.awt.geom.AffineTransform, arg2: java.awt.geom.AffineTransform, arg3: int, arg4: int): sun.font.FontStrike
            public getStrike(arg0: java.awt.Font, arg1: java.awt.font.FontRenderContext): sun.font.FontStrike
            public getFontMetrics(arg0: java.awt.Font, arg1: java.awt.geom.AffineTransform, arg2: java.lang.Object, arg3: java.lang.Object, arg4: float[]): void
            public getStyleMetrics(arg0: float, arg1: float[], arg2: int): void
            public getFontMetrics(arg0: java.awt.Font, arg1: java.awt.font.FontRenderContext, arg2: float[]): void
            protected getTableBytes(arg0: int): byte[]
            protected getLayoutTableCache(): long
            protected getUnitsPerEm(): long
            public canDoStyle(arg0: int): boolean
            public useAAForPtSize(arg0: int): boolean
            public hasSupplementaryChars(): boolean
            public getPostscriptName(): string
            public getFontName(arg0: java.util.Locale): string
            public getFamilyName(arg0: java.util.Locale): string
            public getNumGlyphs(): int
            public charToGlyph(arg0: int): int
            public getMissingGlyphCode(): int
            public canDisplay(arg0: char): boolean
            public canDisplay(arg0: int): boolean
            public getBaselineFor(arg0: char): byte
            public getItalicAngle(arg0: java.awt.Font, arg1: java.awt.geom.AffineTransform, arg2: java.lang.Object, arg3: java.lang.Object): float
            public static class: java.lang.Class<any>
        }
    }
}