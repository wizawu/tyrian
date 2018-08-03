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
                public abstract getNumGlyphs(): int
                public abstract getGlyphCode(arg0: int): int
                public abstract getGlyphCodes(arg0: int, arg1: int, arg2: int[]): int[]
                public getGlyphCharIndex(arg0: int): int
                public getGlyphCharIndices(arg0: int, arg1: int, arg2: int[]): int[]
                public abstract getLogicalBounds(): java.awt.geom.Rectangle2D
                public abstract getVisualBounds(): java.awt.geom.Rectangle2D
                public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
                public abstract getOutline(): java.awt.Shape
                public abstract getOutline(arg0: float, arg1: float): java.awt.Shape
                public abstract getGlyphOutline(arg0: int): java.awt.Shape
                public getGlyphOutline(arg0: int, arg1: float, arg2: float): java.awt.Shape
                public abstract getGlyphPosition(arg0: int): java.awt.geom.Point2D
                public abstract setGlyphPosition(arg0: int, arg1: java.awt.geom.Point2D): void
                public abstract getGlyphTransform(arg0: int): java.awt.geom.AffineTransform
                public abstract setGlyphTransform(arg0: int, arg1: java.awt.geom.AffineTransform): void
                public getLayoutFlags(): int
                public abstract getGlyphPositions(arg0: int, arg1: int, arg2: float[]): float[]
                public abstract getGlyphLogicalBounds(arg0: int): java.awt.Shape
                public abstract getGlyphVisualBounds(arg0: int): java.awt.Shape
                public getGlyphPixelBounds(arg0: int, arg1: java.awt.font.FontRenderContext, arg2: float, arg3: float): java.awt.Rectangle
                public abstract getGlyphMetrics(arg0: int): java.awt.font.GlyphMetrics
                public abstract getGlyphJustificationInfo(arg0: int): java.awt.font.GlyphJustificationInfo
                public abstract equals(arg0: java.awt.font.GlyphVector): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}