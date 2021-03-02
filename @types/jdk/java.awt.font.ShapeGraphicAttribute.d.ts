declare namespace java {
  namespace awt {
    namespace font {

      class ShapeGraphicAttribute extends java.awt.font.GraphicAttribute {
        public static readonly STROKE: boolean
        public static readonly FILL: boolean
        public constructor(arg0: java.awt.Shape, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean)
        public getAscent(): number
        public getDescent(): number
        public getAdvance(): number
        public draw(arg0: java.awt.Graphics2D, arg1: number | java.lang.Float, arg2: number | java.lang.Float): void
        public getBounds(): java.awt.geom.Rectangle2D
        public getOutline(arg0: java.awt.geom.AffineTransform): java.awt.Shape
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public equals(arg0: java.awt.font.ShapeGraphicAttribute): boolean
      }

    }
  }
}
