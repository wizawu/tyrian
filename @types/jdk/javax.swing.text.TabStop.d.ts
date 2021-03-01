declare namespace javax {
  namespace swing {
    namespace text {

      class TabStop implements java.io.Serializable {

        public static readonly ALIGN_LEFT: int
        public static readonly ALIGN_RIGHT: int
        public static readonly ALIGN_CENTER: int
        public static readonly ALIGN_DECIMAL: int
        public static readonly ALIGN_BAR: int
        public static readonly LEAD_NONE: int
        public static readonly LEAD_DOTS: int
        public static readonly LEAD_HYPHENS: int
        public static readonly LEAD_UNDERLINE: int
        public static readonly LEAD_THICKLINE: int
        public static readonly LEAD_EQUALS: int
        public constructor(arg0: float)
        public constructor(arg0: float, arg1: int, arg2: int)
        public getPosition(): float
        public getAlignment(): int
        public getLeader(): int
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
