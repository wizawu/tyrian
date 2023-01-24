declare namespace java {
  namespace awt {
    namespace font {
      class GlyphMetrics {
        public static readonly STANDARD: byte
        public static readonly LIGATURE: byte
        public static readonly COMBINING: byte
        public static readonly COMPONENT: byte
        public static readonly WHITESPACE: byte
        public constructor(
          arg0: number | java.lang.Float,
          arg1: java.awt.geom.Rectangle2D,
          arg2: number | java.lang.Byte
        )
        public constructor(
          arg0: boolean | java.lang.Boolean,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: java.awt.geom.Rectangle2D,
          arg4: number | java.lang.Byte
        )
        public getAdvance(): number
        public getAdvanceX(): number
        public getAdvanceY(): number
        public getBounds2D(): java.awt.geom.Rectangle2D
        public getLSB(): number
        public getRSB(): number
        public getType(): number
        public isStandard(): boolean
        public isLigature(): boolean
        public isCombining(): boolean
        public isComponent(): boolean
        public isWhitespace(): boolean
      }
    }
  }
}
