declare namespace java {
    namespace awt {
        namespace font {
            class ShapeGraphicAttribute extends java.awt.font.GraphicAttribute {
                public static readonly STROKE: boolean
                public static readonly FILL: boolean
                public constructor(arg0: java.awt.Shape, arg1: int, arg2: boolean)
                public getAscent(): float
                public getDescent(): float
                public getAdvance(): float
                public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
                public getBounds(): java.awt.geom.Rectangle2D
                public getOutline(arg0: java.awt.geom.AffineTransform): java.awt.Shape
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: java.awt.font.ShapeGraphicAttribute): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}