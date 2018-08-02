declare namespace java {
    namespace awt {
        namespace font {
            abstract class GraphicAttribute {
                public static TOP_ALIGNMENT: int
                public static BOTTOM_ALIGNMENT: int
                public static ROMAN_BASELINE: int
                public static CENTER_BASELINE: int
                public static HANGING_BASELINE: int
                protected constructor(arg0: int)
                public getAscent(): float
                public getDescent(): float
                public getAdvance(): float
                public getBounds(): java.awt.geom.Rectangle2D
                public getOutline(arg0: java.awt.geom.AffineTransform): java.awt.Shape
                public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
                public getAlignment(): int
                public getJustificationInfo(): java.awt.font.GlyphJustificationInfo
                public static class: java.lang.Class<any>
            }
        }
    }
}