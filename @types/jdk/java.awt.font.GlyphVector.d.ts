declare namespace java {
  namespace awt {
    namespace font {

      abstract class GlyphVector implements java.lang.Cloneable {
        public static readonly FLAG_HAS_TRANSFORMS: int
        public static readonly FLAG_HAS_POSITION_ADJUSTMENTS: int
        public static readonly FLAG_RUN_RTL: int
        public static readonly FLAG_COMPLEX_GLYPHS: int
        public static readonly FLAG_MASK: int
        public constructor()
        public abstract getFont(): java.awt.Font
        public abstract getFontRenderContext(): java.awt.font.FontRenderContext
        public abstract performDefaultLayout(): void
        public abstract getNumGlyphs(): number
        public abstract getGlyphCode(arg0: number | java.lang.Integer): number
        public abstract getGlyphCodes(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: int[]): number[]
        public getGlyphCharIndex(arg0: number | java.lang.Integer): number
        public getGlyphCharIndices(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: int[]): number[]
        public abstract getLogicalBounds(): java.awt.geom.Rectangle2D
        public abstract getVisualBounds(): java.awt.geom.Rectangle2D
        public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: number | java.lang.Float, arg2: number | java.lang.Float): java.awt.Rectangle
        public abstract getOutline(): java.awt.Shape
        public abstract getOutline(arg0: number | java.lang.Float, arg1: number | java.lang.Float): java.awt.Shape
        public abstract getGlyphOutline(arg0: number | java.lang.Integer): java.awt.Shape
        public getGlyphOutline(arg0: number | java.lang.Integer, arg1: number | java.lang.Float, arg2: number | java.lang.Float): java.awt.Shape
        public abstract getGlyphPosition(arg0: number | java.lang.Integer): java.awt.geom.Point2D
        public abstract setGlyphPosition(arg0: number | java.lang.Integer, arg1: java.awt.geom.Point2D): void
        public abstract getGlyphTransform(arg0: number | java.lang.Integer): java.awt.geom.AffineTransform
        public abstract setGlyphTransform(arg0: number | java.lang.Integer, arg1: java.awt.geom.AffineTransform): void
        public getLayoutFlags(): number
        public abstract getGlyphPositions(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: float[]): number[]
        public abstract getGlyphLogicalBounds(arg0: number | java.lang.Integer): java.awt.Shape
        public abstract getGlyphVisualBounds(arg0: number | java.lang.Integer): java.awt.Shape
        public getGlyphPixelBounds(arg0: number | java.lang.Integer, arg1: java.awt.font.FontRenderContext, arg2: number | java.lang.Float, arg3: number | java.lang.Float): java.awt.Rectangle
        public abstract getGlyphMetrics(arg0: number | java.lang.Integer): java.awt.font.GlyphMetrics
        public abstract getGlyphJustificationInfo(arg0: number | java.lang.Integer): java.awt.font.GlyphJustificationInfo
        public abstract equals(arg0: java.awt.font.GlyphVector): boolean
      }

    }
  }
}
