declare namespace java {
  namespace awt {
    namespace font {
      abstract class GraphicAttribute {
        public static readonly TOP_ALIGNMENT: int
        public static readonly BOTTOM_ALIGNMENT: int
        public static readonly ROMAN_BASELINE: int
        public static readonly CENTER_BASELINE: int
        public static readonly HANGING_BASELINE: int
        protected constructor(arg0: number | java.lang.Integer)
        public abstract getAscent(): number
        public abstract getDescent(): number
        public abstract getAdvance(): number
        public getBounds(): java.awt.geom.Rectangle2D
        public getOutline(arg0: java.awt.geom.AffineTransform): java.awt.Shape
        public abstract draw(
          arg0: java.awt.Graphics2D,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float
        ): void
        public getAlignment(): number
        public getJustificationInfo(): java.awt.font.GlyphJustificationInfo
      }
    }
  }
}
