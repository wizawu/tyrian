declare namespace java {
  namespace awt {

    class Font implements java.io.Serializable {
      public static readonly DIALOG: java.lang.String
      public static readonly DIALOG_INPUT: java.lang.String
      public static readonly SANS_SERIF: java.lang.String
      public static readonly SERIF: java.lang.String
      public static readonly MONOSPACED: java.lang.String
      public static readonly PLAIN: int
      public static readonly BOLD: int
      public static readonly ITALIC: int
      public static readonly ROMAN_BASELINE: int
      public static readonly CENTER_BASELINE: int
      public static readonly HANGING_BASELINE: int
      public static readonly TRUETYPE_FONT: int
      public static readonly TYPE1_FONT: int
      protected name: java.lang.String
      protected style: int
      protected size: int
      protected pointSize: float
      hash: int
      public static readonly LAYOUT_LEFT_TO_RIGHT: int
      public static readonly LAYOUT_RIGHT_TO_LEFT: int
      public static readonly LAYOUT_NO_START_CONTEXT: int
      public static readonly LAYOUT_NO_LIMIT_CONTEXT: int
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>)
      protected constructor(arg0: java.awt.Font)
      public static textRequiresLayout(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
      public static getFont(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>): java.awt.Font
      public static createFonts(arg0: java.io.InputStream): java.awt.Font[]
      public static createFonts(arg0: java.io.File): java.awt.Font[]
      public static createFont(arg0: number | java.lang.Integer, arg1: java.io.InputStream): java.awt.Font
      public static createFont(arg0: number | java.lang.Integer, arg1: java.io.File): java.awt.Font
      public getTransform(): java.awt.geom.AffineTransform
      public getFamily(): java.lang.String
      getFamily_NoClientCode(): java.lang.String
      public getFamily(arg0: java.util.Locale): java.lang.String
      public getPSName(): java.lang.String
      public getName(): java.lang.String
      public getFontName(): java.lang.String
      public getFontName(arg0: java.util.Locale): java.lang.String
      public getStyle(): number
      public getSize(): number
      public getSize2D(): number
      public isPlain(): boolean
      public isBold(): boolean
      public isItalic(): boolean
      public isTransformed(): boolean
      public hasLayoutAttributes(): boolean
      public static getFont(arg0: java.lang.String | string): java.awt.Font
      public static decode(arg0: java.lang.String | string): java.awt.Font
      public static getFont(arg0: java.lang.String | string, arg1: java.awt.Font): java.awt.Font
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
      public getNumGlyphs(): number
      public getMissingGlyphCode(): number
      public getBaselineFor(arg0: string | java.lang.Character): number
      public getAttributes(): java.util.Map<java.awt.font.TextAttribute,unknown>
      public getAvailableAttributes(): java.text.AttributedCharacterIterator$Attribute[]
      public deriveFont(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): java.awt.Font
      public deriveFont(arg0: number | java.lang.Integer, arg1: java.awt.geom.AffineTransform): java.awt.Font
      public deriveFont(arg0: number | java.lang.Float): java.awt.Font
      public deriveFont(arg0: java.awt.geom.AffineTransform): java.awt.Font
      public deriveFont(arg0: number | java.lang.Integer): java.awt.Font
      public deriveFont(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>): java.awt.Font
      public canDisplay(arg0: string | java.lang.Character): boolean
      public canDisplay(arg0: number | java.lang.Integer): boolean
      public canDisplayUpTo(arg0: java.lang.String | string): number
      public canDisplayUpTo(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public canDisplayUpTo(arg0: java.text.CharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getItalicAngle(): number
      public hasUniformLineMetrics(): boolean
      public getLineMetrics(arg0: java.lang.String | string, arg1: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
      public getLineMetrics(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
      public getLineMetrics(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
      public getLineMetrics(arg0: java.text.CharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.font.FontRenderContext): java.awt.font.LineMetrics
      public getStringBounds(arg0: java.lang.String | string, arg1: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
      public getStringBounds(arg0: java.text.CharacterIterator, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
      public getMaxCharBounds(arg0: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
      public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: java.lang.String | string): java.awt.font.GlyphVector
      public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: string[] | java.lang.Character[]): java.awt.font.GlyphVector
      public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: java.text.CharacterIterator): java.awt.font.GlyphVector
      public createGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: number[] | java.lang.Integer[]): java.awt.font.GlyphVector
      public layoutGlyphVector(arg0: java.awt.font.FontRenderContext, arg1: string[] | java.lang.Character[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): java.awt.font.GlyphVector
    }

  }
}
