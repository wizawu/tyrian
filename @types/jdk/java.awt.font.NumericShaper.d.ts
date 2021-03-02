declare namespace java {
  namespace awt {
    namespace font {

      class NumericShaper implements java.io.Serializable {
        public static readonly EUROPEAN: int
        public static readonly ARABIC: int
        public static readonly EASTERN_ARABIC: int
        public static readonly DEVANAGARI: int
        public static readonly BENGALI: int
        public static readonly GURMUKHI: int
        public static readonly GUJARATI: int
        public static readonly ORIYA: int
        public static readonly TAMIL: int
        public static readonly TELUGU: int
        public static readonly KANNADA: int
        public static readonly MALAYALAM: int
        public static readonly THAI: int
        public static readonly LAO: int
        public static readonly TIBETAN: int
        public static readonly MYANMAR: int
        public static readonly ETHIOPIC: int
        public static readonly KHMER: int
        public static readonly MONGOLIAN: int
        public static readonly ALL_RANGES: int
        public static getShaper(arg0: int): java.awt.font.NumericShaper
        public static getShaper(arg0: java.awt.font.NumericShaper$Range): java.awt.font.NumericShaper
        public static getContextualShaper(arg0: int): java.awt.font.NumericShaper
        public static getContextualShaper(arg0: java.util.Set<java.awt.font.NumericShaper$Range>): java.awt.font.NumericShaper
        public static getContextualShaper(arg0: int, arg1: int): java.awt.font.NumericShaper
        public static getContextualShaper(arg0: java.util.Set<java.awt.font.NumericShaper$Range>, arg1: java.awt.font.NumericShaper$Range): java.awt.font.NumericShaper
        public shape(arg0: char[], arg1: int, arg2: int): void
        public shape(arg0: char[], arg1: int, arg2: int, arg3: int): void
        public shape(arg0: char[], arg1: int, arg2: int, arg3: java.awt.font.NumericShaper$Range): void
        public isContextual(): boolean
        public getRanges(): int
        public getRangeSet(): java.util.Set<java.awt.font.NumericShaper$Range>
        public hashCode(): int
        public equals(arg0: java.lang.Object): boolean
        public toString(): java.lang.String
      }

    }
  }
}
