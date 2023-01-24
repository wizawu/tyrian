declare namespace java {
  namespace time {
    namespace format {
      class TextStyle extends java.lang.Enum<java.time.format.TextStyle> {
        public static readonly FULL: java.time.format.TextStyle
        public static readonly FULL_STANDALONE: java.time.format.TextStyle
        public static readonly SHORT: java.time.format.TextStyle
        public static readonly SHORT_STANDALONE: java.time.format.TextStyle
        public static readonly NARROW: java.time.format.TextStyle
        public static readonly NARROW_STANDALONE: java.time.format.TextStyle
        public static values(): java.time.format.TextStyle[]
        public static valueOf(arg0: java.lang.String | string): java.time.format.TextStyle
        public isStandalone(): boolean
        public asStandalone(): java.time.format.TextStyle
        public asNormal(): java.time.format.TextStyle
        toCalendarStyle(): number
        zoneNameStyleIndex(): number
      }
    }
  }
}
