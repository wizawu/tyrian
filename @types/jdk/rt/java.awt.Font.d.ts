declare namespace java {
    namespace awt {
        class Font implements java.io.Serializable {
            public static readonly DIALOG: string
            public static readonly DIALOG_INPUT: string
            public static readonly SANS_SERIF: string
            public static readonly SERIF: string
            public static readonly MONOSPACED: string
            public static readonly PLAIN: int
            public static readonly BOLD: int
            public static readonly ITALIC: int
            public static readonly ROMAN_BASELINE: int
            public static readonly CENTER_BASELINE: int
            public static readonly HANGING_BASELINE: int
            public static readonly TRUETYPE_FONT: int
            public static readonly TYPE1_FONT: int
            protected name: string
            protected style: int
            protected size: int
            protected pointSize: float
            public static readonly LAYOUT_LEFT_TO_RIGHT: int
            public static readonly LAYOUT_RIGHT_TO_LEFT: int
            public static readonly LAYOUT_NO_START_CONTEXT: int
            public static readonly LAYOUT_NO_LIMIT_CONTEXT: int
            public getPeer(): java.awt.peer.FontPeer
            public constructor(arg0: java.lang.String | string, arg1: int, arg2: int)
            public constructor(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>)
            protected constructor(arg0: java.awt.Font)
            public static getFont(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>): java.awt.Font
            public static createFont(arg0: int, arg1: java.io.InputStream | java.io.InputStream$$Lambda): java.awt.Font
            public static createFont(arg0: int, arg1: java.io.File): java.awt.Font
            public getTransform(): java.awt.geom.AffineTransform
            public getFamily(): string
            public getFamily(arg0: java.util.Locale): string
            public getPSName(): string
            public getName(): string
            public getFontName(): string
            public getFontName(arg0: java.util.Locale): string
            public getStyle(): int
            public getSize(): int
            public getSize2D(): float
            public isPlain(): boolean
            public isBold(): boolean
            public isItalic(): boolean
            public isTransformed(): boolean
            public hasLayoutAttributes(): boolean
            public static getFont(arg0: java.lang.String | string): java.awt.Font
            public static decode(arg0: java.lang.String | string): java.awt.Font
            public static getFont(arg0: java.lang.String | string, arg1: java.awt.Font): java.awt.Font
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public toString(): string
            public getNumGlyphs(): int
            public getMissingGlyphCode(): int
            public getBaselineFor(arg0: char): byte
            public getAttributes(): java.util.Map<java.awt.font.TextAttribute, any>
            public getAvailableAttributes(): java.text.AttributedCharacterIterator$Attribute[]
            public deriveFont(arg0: int, arg1: float): java.awt.Font
            public deriveFont(arg0: int, arg1: java.awt.geom.AffineTransform): java.awt.Font
            public deriveFont(arg0: float): java.awt.Font
            public deriveFont(arg0: java.awt.geom.AffineTransform): java.awt.Font
            public deriveFont(arg0: int): java.awt.Font
            public deriveFont(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>): java.awt.Font
            public canDisplay(arg0: char): boolean
            public canDisplay(arg0: int): boolean
            public canDisplayUpTo(arg0: java.lang.String | string): int
            public canDisplayUpTo(arg0: char[], arg1: int, arg2: int): int
            public canDisplayUpTo(arg0: java.text.CharacterIterator, arg1: int, arg2: int): int
            public getItalicAngle(): float
            public hasUniformLineMetrics(): boolean
            public getLineMetrics(arg0: java.lang.String | string, arg1: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
            public getLineMetrics(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
            public getLineMetrics(arg0: char[], arg1: int, arg2: int, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
            public getLineMetrics(arg0: java.text.CharacterIterator, arg1: int, arg2: int, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
            public getStringBounds(arg0: java.lang.String | string, arg1: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
            public getStringBounds(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
            public getStringBounds(arg0: char[], arg1: int, arg2: int, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
            public getStringBounds(arg0: java.text.CharacterIterator, arg1: int, arg2: int, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
            public getMaxCharBounds(arg0: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
            public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: java.lang.String | string): java.awt.font.GlyphVector
            public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: char[]): java.awt.font.GlyphVector
            public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: java.text.CharacterIterator): java.awt.font.GlyphVector
            public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: int[]): java.awt.font.GlyphVector
            public layoutGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: char[], arg2: int, arg3: int, arg4: int): java.awt.font.GlyphVector
            public static class: java.lang.Class<any>
        }
    }
}