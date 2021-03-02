declare namespace java {
  namespace awt {
    namespace font {

      class ImageGraphicAttribute extends java.awt.font.GraphicAttribute {
        public constructor(arg0: java.awt.Image, arg1: int)
        public constructor(arg0: java.awt.Image, arg1: int, arg2: float, arg3: float)
        public getAscent(): float
        public getDescent(): float
        public getAdvance(): float
        public getBounds(): java.awt.geom.Rectangle2D
        public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
        public hashCode(): int
        public equals(arg0: java.lang.Object): boolean
        public equals(arg0: java.awt.font.ImageGraphicAttribute): boolean
      }

    }
  }
}
