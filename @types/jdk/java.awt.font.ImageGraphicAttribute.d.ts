declare namespace java {
  namespace awt {
    namespace font {
      class ImageGraphicAttribute extends java.awt.font.GraphicAttribute {
        public constructor(arg0: java.awt.Image, arg1: number | java.lang.Integer)
        public constructor(
          arg0: java.awt.Image,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float
        )
        public getAscent(): number
        public getDescent(): number
        public getAdvance(): number
        public getBounds(): java.awt.geom.Rectangle2D
        public draw(arg0: java.awt.Graphics2D, arg1: number | java.lang.Float, arg2: number | java.lang.Float): void
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public equals(arg0: java.awt.font.ImageGraphicAttribute): boolean
      }
    }
  }
}
