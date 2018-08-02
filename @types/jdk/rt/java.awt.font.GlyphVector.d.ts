declare namespace java {
    namespace awt {
        namespace font {
abstract class GlyphVector implements java.lang.Cloneable {
    public static FLAG_HAS_TRANSFORMS: int
    public static FLAG_HAS_POSITION_ADJUSTMENTS: int
    public static FLAG_RUN_RTL: int
    public static FLAG_COMPLEX_GLYPHS: int
    public static FLAG_MASK: int
    public constructor()
    public getFont(): java.awt.Font
    public getFontRenderContext(): java.awt.font.FontRenderContext
    public performDefaultLayout(): void
    public getNumGlyphs(): int
    public getGlyphCode(arg0: int): int
    public getGlyphCodes(arg0: int, arg1: int, arg2: int[]): int[]
    public getGlyphCharIndex(arg0: int): int
    public getGlyphCharIndices(arg0: int, arg1: int, arg2: int[]): int[]
    public getLogicalBounds(): java.awt.geom.Rectangle2D
    public getVisualBounds(): java.awt.geom.Rectangle2D
    public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
    public getOutline(): java.awt.Shape
    public getOutline(arg0: float, arg1: float): java.awt.Shape
    public getGlyphOutline(arg0: int): java.awt.Shape
    public getGlyphOutline(arg0: int, arg1: float, arg2: float): java.awt.Shape
    public getGlyphPosition(arg0: int): java.awt.geom.Point2D
    public setGlyphPosition(arg0: int, arg1: java.awt.geom.Point2D): void
    public getGlyphTransform(arg0: int): java.awt.geom.AffineTransform
    public setGlyphTransform(arg0: int, arg1: java.awt.geom.AffineTransform): void
    public getLayoutFlags(): int
    public getGlyphPositions(arg0: int, arg1: int, arg2: float[]): float[]
    public getGlyphLogicalBounds(arg0: int): java.awt.Shape
    public getGlyphVisualBounds(arg0: int): java.awt.Shape
    public getGlyphPixelBounds(arg0: int, arg1: java.awt.font.FontRenderContext, arg2: float, arg3: float): java.awt.Rectangle
    public getGlyphMetrics(arg0: int): java.awt.font.GlyphMetrics
    public getGlyphJustificationInfo(arg0: int): java.awt.font.GlyphJustificationInfo
    public equals(arg0: java.awt.font.GlyphVector): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}