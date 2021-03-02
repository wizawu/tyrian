declare namespace java {
  namespace awt {
    namespace font {

      class GlyphJustificationInfo {
        public static readonly PRIORITY_KASHIDA: int
        public static readonly PRIORITY_WHITESPACE: int
        public static readonly PRIORITY_INTERCHAR: int
        public static readonly PRIORITY_NONE: int
        public readonly weight: float
        public readonly growPriority: int
        public readonly growAbsorb: boolean
        public readonly growLeftLimit: float
        public readonly growRightLimit: float
        public readonly shrinkPriority: int
        public readonly shrinkAbsorb: boolean
        public readonly shrinkLeftLimit: float
        public readonly shrinkRightLimit: float
        public constructor(arg0: number | java.lang.Float, arg1: boolean | java.lang.Boolean, arg2: number | java.lang.Integer, arg3: number | java.lang.Float, arg4: number | java.lang.Float, arg5: boolean | java.lang.Boolean, arg6: number | java.lang.Integer, arg7: number | java.lang.Float, arg8: number | java.lang.Float)
      }

    }
  }
}
