declare namespace sun {
    namespace font {
class StandardGlyphVector extends java.awt.font.GlyphVector {
    public static FLAG_USES_VERTICAL_BASELINE: int
    public static FLAG_USES_VERTICAL_METRICS: int
    public static FLAG_USES_ALTERNATE_ORIENTATION: int
    public constructor(arg0: java.awt.Font, arg1: java.lang.String | string, arg2: java.awt.font.FontRenderContext)
    public constructor(arg0: java.awt.Font, arg1: char[], arg2: java.awt.font.FontRenderContext)
    public constructor(arg0: java.awt.Font, arg1: char[], arg2: int, arg3: int, arg4: java.awt.font.FontRenderContext)
    public constructor(arg0: java.awt.Font, arg1: java.awt.font.FontRenderContext, arg2: int[], arg3: float[], arg4: int[], arg5: int)
    public initGlyphVector(arg0: java.awt.Font, arg1: java.awt.font.FontRenderContext, arg2: int[], arg3: float[], arg4: int[], arg5: int): void
    public constructor(arg0: java.awt.Font, arg1: java.text.CharacterIterator, arg2: java.awt.font.FontRenderContext)
    public constructor(arg0: java.awt.Font, arg1: int[], arg2: java.awt.font.FontRenderContext)
    public static getStandardGV(arg0: java.awt.font.GlyphVector, arg1: sun.java2d.loops.FontInfo): sun.font.StandardGlyphVector
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
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public copy(): sun.font.StandardGlyphVector
    public clone(): java.lang.Object
    public setGlyphPositions(arg0: float[], arg1: int, arg2: int, arg3: int): void
    public setGlyphPositions(arg0: float[]): void
    public getGlyphPositions(arg0: float[]): float[]
    public getGlyphTransforms(arg0: int, arg1: int, arg2: java.awt.geom.AffineTransform[]): java.awt.geom.AffineTransform[]
    public getGlyphTransforms(): java.awt.geom.AffineTransform[]
    public setGlyphTransforms(arg0: java.awt.geom.AffineTransform[], arg1: int, arg2: int, arg3: int): void
    public setGlyphTransforms(arg0: java.awt.geom.AffineTransform[]): void
    public getGlyphInfo(): float[]
    public pixellate(arg0: java.awt.font.FontRenderContext, arg1: java.awt.geom.Point2D, arg2: java.awt.Point): void
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}